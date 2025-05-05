export type NewsItem = {
    pubId: string
    title: string,
    url: string,
    description: string,
    pubDate: string
}

export type NewsFeed = NewsItem[];