export type NewsItem = {
    pubId: string
    title: string,
    url: string,
    desc: string,
    pubDate: string
}

export type NewsFeed = NewsItem[];