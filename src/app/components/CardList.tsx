import Card from '@/app/components/ui/Card';
import { NewsFeed, NewsItem } from '@/app/types/types';


/*
  TODO:
  - Creative Card display
*/

export default async function CardList({ query }: { query: string }) {
  const port = 'https://behr-api.vercel.app';
  const response = await fetch(`${port}/search?query=${query}`);
  const { results } = await response.json();

  return (
    <section className='max-w-3xl self-center'>
      <ul className='flex flex-col gap-6 md:mr-[10%]'>
        {results?.map((newsItem: NewsItem, i: number) => {
          return (
            <li key={i}>
              <Card item={newsItem}/>
            </li>
          );
        })}
      </ul>
    </section>
  )
}