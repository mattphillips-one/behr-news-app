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
    <section className='flex snap-x snap-mandatory overflow-x-scroll md:flex-col gap-6'>
      {featuredItems.map((newsItem: NewsItem, i: number) => {
        return (
          <div className="snap-center min-w-xs first:ml-3 last:mr-3 md:first:ml-0 md:last:mr-0"
            key={i}>
            <Card item={newsItem}/>
          </div>
        );
      })}
    </section>
  );
}