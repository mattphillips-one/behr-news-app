import { type NextRequest } from 'next/server';
import bhrrcService from '@/app/api/services/bhrrcService';
import filterService from '@/app/api/services/filterService';
import guardianService from '../services/guardianService';
import { NewsFeed } from '@/app/types/types';


/*
    TODO:
    - Integrate more sources
    - async fetch multiple sources
*/


export async function GET(request: NextRequest) {
    // /api/search?query=""
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    if (!query) {
        return new Response("Query empty", { status: 400 });
    }

    try {
        const bhrrcFeed = await bhrrcService.fetchBHRRC(query);
        const bhrrcFeedFiltered = filterService.sortByRecent(bhrrcFeed);

        const guardianFeed = await guardianService.fetchGuardian(query);
        
        const allFeeds: NewsFeed = [...bhrrcFeedFiltered, ...guardianFeed];
        
        const results = filterService.filterSlavery(allFeeds);
        //console.log(results);
        
        return Response.json({results});
    } catch(error) {
        return Response.json({message: error});
    }
}