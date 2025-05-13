import { NewsItem } from '@/app/types/types';
import Card from './ui/Card';


export default async function SearchResults({ query, log }: { query: string, log: boolean }) {
  const port = 'https://behr-api.onrender.com';
  const response = await fetch(`${port}/search?query=${query}`);
  const { results } = await response.json();
  const newsItems = results ?? [];

  if (log) {
    console.log(results);
  }

  return (
    <section>
      <ul className={`flex flex-col gap-6`}>
        {newsItems.map((newsItem: NewsItem, i: number) => {
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