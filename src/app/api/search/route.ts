import { type NextRequest } from 'next/server';
import bhrrcService from '@/app/api/services/bhrrcService';
import filterService from '@/app/api/services/filterService';

export async function GET(request: NextRequest) {
    // /api/search?query=""
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    if (!query) {
        return new Response("Query empty", { status: 400 });
    }

    try {
        const bhrrc = await bhrrcService.fetchBHRRC(query);
        const result = filterService.sortByRecent(bhrrc);
        return Response.json({result});
    } catch(error) {
        return Response.json({message: error});
    }
}