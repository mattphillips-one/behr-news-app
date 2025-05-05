import { NewsItem, NewsFeed } from "@/app/types/types";
import { type FilterFn } from '@/app/api/services/filterService';

type GuardianResponse = {
    results: GuardianItem[]
}

type GuardianItem = {
    id: string,
    type: string,
    sectionId: string,
    sectionName: string,
    webPublicationDate: string,
    webTitle: string,
    webUrl: string,
    apiUrl: string,
    isHosted: boolean,
    pillarId?: string,
    pillarName?: string
}


export default {

    async get(term: string) {
        const fetched = await this.fetchGuardian(term);
        const parsed = this.parseGuardian(fetched, true);
        return parsed;
    },

    async fetchGuardian(term: string) {
        const api_key = process.env.GUARDIAN_KEY || "test";
        const page = 1;

        const query = `${term}`;

        try {
            const res = await fetch(`https://content.guardianapis.com/search?page=${page}&q=${query}&api-key=${api_key}`);
            const { response } = await res.json();
            return response;
        } catch(error) {
            throw error;
        }
    },

    parseGuardian(response: GuardianResponse, filter: boolean) {
        const { results } = response;
        const items: NewsFeed = [];

        for (const item of results) {
            
            if (filter && !this.filterGuardian(item)) {
                continue;
            }

            const newsItem = {
                pubId: "The Guardian",
                title: item.webTitle,
                url: item.webUrl,
                desc: "",
                pubDate: (new Date(item.webPublicationDate)).toDateString()
            }

            items.push(newsItem);
        }

        return items;
    },

    filterGuardian(item: GuardianItem) {
        if (item.sectionId === 'cook-up-a-feast-with-tesco-finest'
            || item.pillarId === 'pillar/arts'
            || item.pillarId === 'pillar/sport'
            || item.pillarId === 'pillar/lifestyle'
        ) {
            return false;
        }
        return true;
    }
}