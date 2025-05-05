import { type NextRequest } from 'next/server';
import bhrrcService from '@/app/api/services/bhrrcService';
import filterService from '@/app/api/services/filterService';
import guardianService from '../services/guardianService';
import { NewsFeed } from '@/app/types/types';
import searchService from '../services/searchService';


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
        return Response.json({message: "Query empty"});
    }

    try {
        const results = await searchService.getAll(query);
        return Response.json({results});
    } catch(error) {
        return Response.json({message: error});
    }
}