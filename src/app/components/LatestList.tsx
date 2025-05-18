import { NewsItem } from "../types/types";
import Card from "@/app/components/ui/Card";
import { fonts } from "./ui/fonts";

export default function LatestList() {

  // Fetch from database?
  const latestItems: NewsItem[] = [
    {
      pubId: 'The Guardian',
      title: '‘Morally repugnant’: Brazilian workers sue coffee supplier to Starbucks over ‘slavery-like conditions’',
      url: 'https://www.theguardian.com/world/2025/apr/24/starbucks-brazil-coffee-forced-labour',
      description: 'Brazil has been the world’s leading coffee producer due to the forced labour of enslaved Africans and Afro-Brazilians',
      pubDate: 'Thu Apr 24 2025'
    },
    {
      pubId:	"Global Witness",
      title:	"New investigation suggests EU trader Traxys buys conflict minerals from DRC",
      description:	"Analysis of trade data and testimonies suggest a significant proportion of coltan bought from Rwanda by multibillion-dollar company is connected to the ongoing war in east DRC",
      url:	"https://globalwitness.org/en/campaigns/transition-minerals/new-investigation-suggests-eu-trader-traxys-buys-conflict-minerals-from-drc/",
      pubDate:	"15 April 2025"
    },
    {
      pubId: "InfoAmazonia",
      title: "ExxonMobil builds ‘petro-state’ in Guyana, amid warnings of environmental disaster",
      description: "Guyana’s rapid ascent to major oil producer status, fueled by the giant US oil company, has come at a steep price: rising inequality, weakened environmental regulations, unchecked gas flaring, and growing foreign influence.",
      url: 'https://infoamazonia.org/en/2025/04/08/exxonmobil-builds-petro-state-in-guyana-amid-warnings-of-environmental-disaster/',
      pubDate: '8 April 2025'
    }
  ];

  return (
    <section className='flex flex-row snap-x snap-mandatory overflow-x-scroll md:overflow-auto gap-1 md:gap-6 divide-x-[0.5px] divide-solid divide-neutral-300 dark:divide-neutral-700 no-scrollbar mask-to-r md:mask-none'>
      {latestItems.map((newsItem: NewsItem, i: number) => {
        return (
          <div className="min-w-xs md:w-1/3 snap-start px-5"
            key={i}>
            <Card item={newsItem} descVisibility="hideSmall"/>
          </div>
        );
      })}
    </section>
  );
}