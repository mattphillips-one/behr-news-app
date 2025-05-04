import Image from "next/image";
import Search from '@/app/components/search';
import CardList from '@/app/components/CardList';

export default async function Home(props: {searchParams?: Promise<{query?: string}>}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <main className='flex min-h-screen flex-col p-6'>
      <section className=''>
        <div className='text-center'>
          <h1 className={`text-2xl`}>Search</h1>
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
