import Card from '@/app/components/ui/Card';
import { NewsFeed, NewsItem } from '@/app/types/types';

export default async function CardList({ query }: { query: string }) {
  const response: Response = await fetch(`${process.env.SERVER_URL}/api/search?query=${query}`);
  const { result } = await response?.json();

  return (
    <section className='max-w-2xl'>
      <ul className='flex flex-col gap-6'>
        {result?.map((newsItem: NewsItem, i: number) => {
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