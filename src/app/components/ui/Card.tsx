import { NewsItem } from '@/app/types/types';

export default function Card({ item }: {item: NewsItem}) {
  

  return (
    <a className='flex flex-col'
      href={item.url}
      target='_blank'
    >
      <div>
        <h2 className='text-lg font-bold hover:underline'>{item.title}</h2>
      </div>
      <div>
        <p>{item.desc}</p>
      </div>
      <div>
        <p className='text-sm font-light text-stone-600 dark:invert'>{item.pubDate}</p>
      </div>
    </a>
  );
}