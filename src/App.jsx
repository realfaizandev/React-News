import { useState } from "react";
import Header from "./components/header/Header";
import NewsList from "./components/NewsList";
import { newsData } from "./utils/Data";
import "./styles.css";
export default function App() {
  const [news, setNews] = useState(newsData);
  const getKeywords = (event) => {
    let keywords = event.target.value.toLowerCase().trim();
    let filtered = newsData.filter(item => {
      return item.title.toLowerCase().indexOf(keywords) > -1;
    })
    setNews(filtered);
  }
  return (
    <>
      <Header getKeywords={getKeywords} />
      <NewsList news={news} />
    </>
  );
}