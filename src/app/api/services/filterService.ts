import { NewsFeed } from "@/app/types/types";


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

    filterSlavery(feed: NewsFeed) {
        feed.sort((a, b) => {
            const aS = a.title.toLowerCase().includes('slavery') || a.desc.toLowerCase().includes('slavery');
            const bS = b.title.toLowerCase().includes('slavery') || b.desc.toLowerCase().includes('slavery');

            if (aS) { return -1 }
            if (bS) { return 1 }
            return 0;
        });
        return feed;
    }
}