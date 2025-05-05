import { NewsItem, NewsFeed } from "@/app/types/types";

export type FilterFn = (item: NewsItem) => boolean;

export default {

    sortByRecent(feed: NewsFeed) {
        // sorts items by date in descending order (recent first)
        feed.sort((a, b) => {
            const aDate = Date.parse(a.pubDate);
            const bDate = Date.parse(b.pubDate);
            return( bDate - aDate ); // reverse order
        });
        return feed;
    },

    sortByTerm(feed: NewsFeed, term: string) {
        feed.sort((a, b) => {
            const aS = a.title.toLowerCase().includes(term) || a.desc.toLowerCase().includes(term);
            const bS = b.title.toLowerCase().includes(term) || b.desc.toLowerCase().includes(term);

            if (aS) { return -1 }
            if (bS) { return 1 }
            return 0;
        });
        return feed;
    },

    filterByTerms(feed: NewsFeed, terms: string[]) {
        const filtered = feed.filter((item: NewsItem) => {
            for (const term of terms) {
                if (item.title.toLowerCase().includes(term)) {
                    return true;
                }
            }
            return false;
        });
        return filtered;
    }
}