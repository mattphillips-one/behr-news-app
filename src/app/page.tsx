import Image from "next/image";
import Search from '@/app/components/search';
import CardList from '@/app/components/CardList';
import { fonts } from '@/app/components/ui/fonts';

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
    <main className='flex min-h-screen flex-col p-6'>
      <section className=''>
        <h1 className={`${fonts.ovo} text-2xl absolute m-1`}>BEHR News</h1>
        <div className='text-center mt-12'>
          <h1 className={`${fonts.noto_sans} text-3xl font-light`}>Search</h1>
        </div>
        <div className='flex flex-col items-center m-6'>
          <Search placeholder="Search ..." />
        </div>
        <div className='mx-6 lg:mx-16'>
          {(query !== '') ? <CardList query={query} /> : null}
        </div>
        <div>
          {/* Pagination ???? */}
        </div>
      </section>
    </main>
  );
}
