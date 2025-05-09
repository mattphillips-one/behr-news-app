import Search from '@/app/components/search';
import SearchResults from '@/app/components/SearchResults';
import { fonts } from '@/app/components/ui/fonts';
import { Suspense } from "react";
import Loading from '@/app/components/ui/load-dots';
import FeaturedList from "./components/FeaturedList";

/*
  TODO:
  - Loading icon
  - Fonts
  - mobile screen layout
*/

export default async function Home(props: {searchParams?: Promise<{query?: string}>}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <section className=''>
      { /*
      <div className='text-center mb-4'>
        <h1 className={`${fonts.radley} text-3xl font-light`}>Search</h1>
      </div>
      */}

      <div className='flex flex-col md:flex-row justify-evenly'>
        <div className="flex flex-col md:w-1/3 lg:mt-6 gap-2">
          <h1 className={`${fonts.lato} font-light text-2xl/10 border-b-1 border-neutral-600 mx-3`}>
            Featured
          </h1>
          <div className=''>
            <FeaturedList />
          </div>
          
        </div>
        
    
        <div className='flex flex-col px-3 md:w-2/3 max-w-3xl md:pl-6'>
          <h1 className={`${fonts.lora} text-2xl font-light self-center py-2`}>Search</h1>
          <div className=''>
            <Search placeholder="Search ..." />
          </div>
          <div className=''>
            {(query !== '') ? 
              <Suspense key={query} fallback={<Loading />}>
                <SearchResults query={query} log={true} />
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
