import { NewsItem } from "../types/types";
import Card from "./ui/Card";
import { fonts } from "./ui/fonts";

export default function FeaturedList() {

  // Fetch from database?
  const featuredItems: NewsItem[] = [
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
    },
    {
      pubId: "Coffee Watch",
      title: '\"Ghost Farms and Coffee Laundering\"',
      description: "How labor violations enter Starbucks’ and Nestlé’s Chinese coffee supply chain",
      url: 'https://coffeewatch.org/ghost-farms-and-coffee-laundering/',
      pubDate: '29 Nov 2024'
    }
  ];

  return (
    <section className='flex flex-col gap-6'>
      {featuredItems.map((newsItem: NewsItem, i: number) => {
        return (
          <div className=""
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
        <p className={`${fonts.lato} text-sm md:text-md text-stone-600 dark:text-stone-300`}>{item.pubId}</p>
      </div>
      <div>
        <h2 className={`${fonts.merriweather} text-lg md:text-xl group-hover:underline decoration-1`}>{item.title}</h2>
      </div>
      <div>
        <p className={`${fonts.lato} text-sm md:text-md`}>{item.description}</p>
      </div>
      <div>
        <p className={`${fonts.lato} text-sm md:text-md text-stone-600 dark:text-stone-300`}>{item.pubDate}</p>
      </div>
    </a>
  );
}