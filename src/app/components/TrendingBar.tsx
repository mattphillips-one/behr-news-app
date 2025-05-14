import Link from 'next/link';

const TrendingBar = async () => {

  // to be implemented later
  //const response = await fetch(`${process.env.API_PORT}/trendingSearches`);
  //const { trending } = await response.json();

  const trending = ["coffee", "mining", "oil", "Uyghur"];
  
  return (
    <div className="flex flex-row">
      {trending.map((term: string, index: number) => (
        <div key={term} className='flex flex-row'>
          <Link href={`/?query=${term}#search`}
            className="hover:text-neutral-600"
          >
            {term}
          </Link>
          { index < trending.length - 1 && <p className='px-3 text-red-600'>•</p> }
        </div>
      ))}
    </div>
  )
}

export default TrendingBar;