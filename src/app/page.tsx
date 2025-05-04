import Image from "next/image";
import Search from '@/app/components/search';
import CardList from '@/app/components/CardList';
import { fonts } from '@/app/components/ui/fonts';
import { Suspense } from "react";
import Loading from '@/app/components/ui/load-dots';

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
      <div className='text-center'>
        <h1 className={`${fonts.noto_sans} text-3xl font-light`}>Search</h1>
      </div>
      <div className='flex flex-col items-center m-6'>
        <Search placeholder="Search ..." />
      </div>
      <div className='mx-6 lg:mx-16'>
        {(query !== '') ? 
          <Suspense key={query} fallback={<Loading />}>
            <CardList query={query} />
          </Suspense> 
          : null
        }
      </div>
      <div>
        {/* Pagination ???? */}
      </div>
    </section>
  );
}
