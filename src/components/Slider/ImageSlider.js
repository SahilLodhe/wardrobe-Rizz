import React, { useState, useEffect } from "react";
import axios from "axios";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
//import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from "react-alice-carousel";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [articles, setArticles] = useState([]);
  const [articles1, setArticles1] = useState([]);
  const [query, setQuery] = useState("fashion");
  function onButtonClick(text) {
    setQuery(text);
  }
  const arr = [
    {
      query: "Pune fashion",
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      query: "Hot Pics",
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=global%20trends%20in%20fashion&apiKey=9096f3649de7485d9156f05eda108ad1`
      );
      setArticles(
        response.data.articles
          .map((article) => ({
            image: article.urlToImage,
            url: article.url,
            title: article.title,
          }))
          .filter((article) => article.image != null)
      );
      console.log(response);
    };

    getArticles();
  }, [query]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=indian%20fashion%20trends&apiKey=9096f3649de7485d9156f05eda108ad1`
      );
      setArticles1(
        response.data.articles
          .map((article) => ({
            image: article.urlToImage,
            url: article.url,
            title: article.title,
          }))
          .filter((article) => article.image != null)
      );
      console.log(response);
    };

    getArticles();
  }, [query]);
  const [current, setCurrent] = useState(0);
  const length = articles.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const [current1, setCurrent1] = useState(0);
  const length1 = articles1.length;

  const nextSlide1 = () => {
    setCurrent1(current1 === length1 - 1 ? 0 : current1 + 1);
  };

  const prevSlide1 = () => {
    setCurrent1(current1 === 0 ? length1 - 1 : current1 - 1);
  };

  /*
if (!Array.isArray(slides) || slides.length <= 0) {
  return null;
}*/

  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        <h1>GLOBAL FASHION</h1>
        {articles.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <>
                  <a href={slide.url}>
                    <h1>{slide.title}</h1>
                  </a>
                  <img src={slide.image} alt="travel image" className="image" />
                </>
              )}
            </div>
          );
        })}
      </section>

      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow1" onClick={prevSlide1} />
        <FaArrowAltCircleRight className="right-arrow1" onClick={nextSlide1} />
        <h1>LOCAL FASHION</h1>
        {articles1.map((slide, index) => {
          return (
            <div
              className={index === current1 ? "slide active" : "slide"}
              key={index}
            >
              {index === current1 && (
                <>
                  <a href={slide.url}>
                    <h1>{slide.title}</h1>
                  </a>
                  <img src={slide.image} alt="travel image" className="image" />
                </>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ImageSlider;

/*const NewsList = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
      const getArticles = async () => {
          const response = await axios.get(`https://newsapi.org/v2/everything?q=football&apiKey=`)
          setArticles(response.data.articles)
          console.log(response)
      }

      getArticles()
  }, [])
  return (
      <div>
          {articles.map(article => {
              return(
                  <NewsItem 
                      title={article.title}
                      description={article.description}
                      url={article.url}
                      urlToImage={article.urlToImage} 
                  />
                  
              )
          })}
      </div>
  )
}

export  NewsList;*/
