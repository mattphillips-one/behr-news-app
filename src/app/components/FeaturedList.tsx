import { NewsItem } from "../types/types";
import Card from "./ui/Card";
import { fonts } from "./ui/fonts";

export default function FeaturedList() {

  // Fetch from database?
  const featuredItems: NewsItem[] = [
    {
    pubId: 'The Guardian',
    title: '‘Morally repugnant’: Brazilian workers sue coffee supplier to Starbucks over ‘slavery-like conditions’',
    url: 'https://www.theguardian.com/world/2025/apr/24/starbucks-brazil-coffee-forced-labour',
    description: 'Brazil has been the world’s leading coffee producer due to the forced labour of enslaved Africans and Afro-Brazilians',
    pubDate: 'Thu Apr 24 2025'
    },
    {
      pubId: "The Guardian",
      title: "Revealed: world’s largest meat company may break Amazon deforestation pledges again",
      url: "https://www.theguardian.com/environment/2025/apr/17/revealed-worlds-largest-meat-company-jbs-may-break-amazon-deforestation-pledges-again",
      description: "Brazilian ranchers in Pará and Rondônia say JBS can not achieve stated goal of deforestation-free cattle",
      pubDate: "Thu Apr 17 2025"
    },
    {
      pubId: 'Global Witness',
      title: 'How the militarisation of mining threatens Indigenous defenders in the Philippines',
      description: 'With skyrocketing global demand for critical minerals – vital to the green energy transition – Indigenous groups and biodiversity are at risk in the Philippines',
      url: 'https://globalwitness.org/en/campaigns/land-and-environmental-defenders/how-the-militarisation-of-mining-threatens-indigenous-defenders-in-the-philippines/',
      pubDate: '03 December 2024'
    }
  ];

  return (
    <section className='flex snap-x snap-mandatory overflow-x-scroll md:flex-col gap-1 md:gap-6 divide-x divide-solid divide-neutral-300 md:divide-none no-scrollbar'>
      {featuredItems.map((newsItem: NewsItem, i: number) => {
        return (
          <div className="snap-start min-w-xs px-6 md:px-0"
            key={i}>
            <FeaturedCard item={newsItem}/>
          </div>
        );
      })}
    </section>
  );
}

function FeaturedCard({ item }: {item: NewsItem}) {
  
  return (
    <a className='flex flex-col group gap-1 active:text-neutral-600'
      href={item.url}
      target='_blank'
    >
      <div>
        <p className={`${fonts.lato} text-sm md:text-md text-stone-600 dark:invert`}>{item.pubId}</p>
      </div>
      <div>
        <h2 className={`${fonts.merriweather} text-lg md:text-xl group-hover:underline decoration-1`}>{item.title}</h2>
      </div>
      <div>
        <p className={`${fonts.lato} hidden text-sm md:text-md md:block`}>{item.description}</p>
      </div>
      <div>
        <p className={`${fonts.lato} text-sm md:text-md text-stone-600 dark:invert`}>{item.pubDate}</p>
      </div>
    </a>
  );
}