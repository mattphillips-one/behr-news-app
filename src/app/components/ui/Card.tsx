import { NewsItem } from '@/app/types/types';
import { fonts } from '@/app/components/ui/fonts';

export default function Card({ item }: {item: NewsItem}) {
  
  return (
    <a className='flex flex-col group gap-1'
      href={item.url}
      target='_blank'
    >
      <div>
        <p className={`text-sm text-stone-600 dark:invert`}>{item.pubId}</p>
      </div>
      <div>
        <h2 className={`${fonts.merriweather} text-xl font-bold group-hover:underline decoration-1`}>{item.title}</h2>
      </div>
      <div>
        <p className={`${fonts.inter}`}>{item.desc}</p>
      </div>
      <div>
        <p className='text-sm font-light text-stone-600 dark:invert'>{item.pubDate}</p>
      </div>
    </a>
  );
}