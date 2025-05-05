import bhrrcService from "./bhrrcService";
import filterService from "./filterService";
import guardianService from "./guardianService";
import { NewsFeed } from "@/app/types/types";

export default {
    filterTerms: ["slave", "right", "climate", "environment", "fair", "justice"],

    async getAll(query: string) {
        const bhrrcFeed = await bhrrcService.fetchBHRRC(query);
        const bhrrcFeedFiltered = filterService.sortByRecent(bhrrcFeed);

        const guardianFeed = await guardianService.get(query);
        const guardianFiltered = filterService.filterByTerms(guardianFeed, this.filterTerms);
        
        const allFeeds: NewsFeed = [...bhrrcFeedFiltered, ...guardianFiltered];
        
        const results = filterService.sortByTerm(allFeeds, "slavery");
        return results;
    }
}