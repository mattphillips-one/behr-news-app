import { NewsItem } from '@/app/types/types';
import { fonts } from '@/app/components/ui/fonts';

type Props = {
  item: NewsItem,
  descVisibility: "always" | "hideSmall" | "never"
}

export default function Card({ item, descVisibility }: Props) {

  // set visibility for description
  let visibility = ""
  switch (descVisibility) {
    case "hideSmall":
      visibility = "hidden md:block"
      break;
    case "never":
      visibility = "hidden"
    default:
      break;
  }
  
  return (
    <a className='flex flex-col group gap-1 active:text-neutral-600'
      href={item.url}
      target='_blank'
    >
      <div>
        <p className={`${fonts.inter} font-light text-sm md:text-md text-stone-600 dark:text-stone-200`}>{item.pubId}</p>
      </div>
      <div>
        <h2 className={`${fonts.libre_franklin} font-semibold text-neutral-900 text-lg md:text-xl group-hover:text-red-500 group-active:text-red-500 dark:text-neutral-100`}>{item.title}</h2>
      </div>
      <div>
        <p className={`${fonts.open_sans} ${visibility} font-normal text-neutral-800 text-md md:text-lg/6 dark:text-neutral-200`}>{item.description}</p>
      </div>
      <div>
        <p className={`${fonts.inter} font-light text-sm md:text-md text-stone-600 dark:text-stone-200`}>{item.pubDate}</p>
      </div>
    </a>
  );
}