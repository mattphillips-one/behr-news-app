import Search from '@/app/components/search';
import { fonts } from '@/app/components/ui/fonts';


export default async function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section className='flex flex-cols justify-center'>
      <div className='max-w-3xl mb-4'>
        <h1 className={`${fonts.radley} text-3xl font-light text-center pt-6`}>Search</h1>
        <div className='w-lg md:w-xl lg:w-3xl py-3'>
          <Search placeholder="Search ..." />
        </div>
        {children}
      </div>
      
      <div>
        {/* Pagination ???? */}
      </div>
    </section>
  );
}
