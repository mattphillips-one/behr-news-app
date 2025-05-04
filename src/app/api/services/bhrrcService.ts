import Parser from 'rss-parser';
import { NewsFeed } from '@/app/types/types';

export type bhrrcFeedRawType = {
    [key: string]: {
        [key: string]: bhrrcItem
    }
}

export type bhrrcItem = {
    creator?: string,
    title: string,
    link: string,
    pubDate: string,
    content: string,
    contentSnippet: string,
    guid: string,
    isoDate: string
}

export default {

    filterBHRRC(item: bhrrcItem) {
        return (item.title.toLowerCase().includes("response")
        || item.title.toLocaleLowerCase().includes("respond")
        || item.content === ""
        || item.content.toLowerCase().includes("response")
        || item.content.toLowerCase().includes("respond"));
    },

    // takes json-parsed response and parses it to create NewsFeed type
    // filter set to true will filter results from parsed list
    parseBHRRC(bhrrcFeed: bhrrcFeedRawType, filter: boolean) {
        const results = bhrrcFeed.items; // search results under 'items'
        var items: NewsFeed = [];

        // extracting news items and adding to items array
        for (const [k, v] of Object.entries(results)) {
            const item: bhrrcItem = v;

            if (filter && this.filterBHRRC(item)) {
                continue;
            }

            const date = new Date(Date.parse(item.isoDate));

            const newsItem = {
                pubId: "BHRRC",
                title: item.title,
                url: item.link,
                desc: item.content || item.contentSnippet || "",
                pubDate: date.toDateString()
            }
            items.push(newsItem);
        }

        return items;
    },

    // Fetches RSS feed, parses it, 
    async fetchBHRRC(term: string) {
        const parser = new Parser();
        const url = `https://www.business-humanrights.org/en/feeds/latest-news/3/?&search=${term}&language=en`;

        try {
            const feed: bhrrcFeedRawType = await parser.parseURL(url);
            const parsedFeed = this.parseBHRRC(feed, true); // filter manually for now
            return parsedFeed;
        } catch(error) {
            throw error;
        }
    }
}