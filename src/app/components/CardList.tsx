import Card from '@/app/components/ui/Card';
import { NewsFeed, NewsItem } from '@/app/types/types';


/*
  TODO:
  - Creative Card display
*/

export default async function CardList({ query }: { query: string }) {
  const port = process.env.URL || 'https://behr-news-app.vercel.app';
  const response = await fetch(`${port}/api/search?query=${query}`);
  const { results } = await response.json();

  return (
    <section className='max-w-2xl mx-6 lg:pl-[10%]'>
      <ul className='flex flex-col gap-6'>
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