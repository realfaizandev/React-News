import NewsListItem from "./NewsListItem";

export default function NewsList({ news }) {
    const newsHandler = news.map(item => (
        <NewsListItem key={item.id} item={item} />
    ))
    return (
        <div className="news_list">
            {news.length > 0 ? newsHandler : <h2 style={{ color: "pink" }}></h2>}
        </div>
    );
}