import { useEffect, useState } from "react";

function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://edstack.onrender.com");
      const jsonData = await response.json();
      setArticles(jsonData.results || []);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const hasContent = articles.length > 0;

  return (
    <>

    
    
    </>
  );
}

export default Blog;
