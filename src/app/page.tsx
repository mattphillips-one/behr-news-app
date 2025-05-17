import Search from '@/app/components/search';
import SearchResults from '@/app/components/SearchResults';
import { fonts } from '@/app/components/ui/fonts';
import { Suspense } from "react";
import Loading from '@/app/components/ui/load-dots';
import FeaturedList from "./components/FeaturedList";
import LatestList from "@/app/components/LatestList";
import TrendingBar from "@/app/components/TrendingBar";

/*
  TODO: create programmatic trending bar
*/


export default async function Home(props: {searchParams?: Promise<{query?: string}>}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <section className='flex flex-col md:px-4'>

      <div className="flex flex-col pt-6 gap-2">
        <h1 className={`${fonts.outfit} font-bold text-neutral-500 text-xl/10 border-b-1 border-neutral-600 border-dotted pl-5 md:ml-0`}>
          Latest
        </h1>
        <div className='pt-1'>
          <LatestList />
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between'>

        <div className="flex flex-col md:w-1/3 pt-6 gap-2">
          <h1 className={`${fonts.outfit} font-bold text-neutral-500 text-xl/10 border-b-1 border-neutral-600 border-dotted pl-5 md:ml-0`}>
            Featured
          </h1>
          <div className='px-5 pt-1 md:mr-3'>
            <FeaturedList />
          </div>
        </div>
        
    
        <div className='flex flex-col pt-4 md:pt-6 px-4 md:px-0 md:w-3/5' id='search'>
          <h1 className={`${fonts.outfit} font-bold text-neutral-500 text-xl/10 md:border-t-0 border-b-1 border-neutral-600 border-dotted  md:ml-0`}>
            Search
          </h1>

          {/* Trending bar: create programmatically */}
          <span className={`flex flex-row ${fonts.outfit} pr-3 py-2`}>
            <p className="pr-3">Trending: </p>
            <TrendingBar />
          </span>

          <Search placeholder="Search ..." value={query}/>
          <div className='pb-10'>
            {(query !== '') ? 
              <Suspense key={query} fallback={<Loading />}>
                <SearchResults query={query} log={false} />
              </Suspense> 
              : null
            }
          </div>
        </div>
      </div>
      
      <div>
        {/* Pagination ???? */}
      </div>
    </section>
  );
}
