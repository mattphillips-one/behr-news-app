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
    }
}