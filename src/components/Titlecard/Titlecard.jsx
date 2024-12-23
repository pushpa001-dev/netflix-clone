import React, { useEffect, useRef, useState } from "react";
import "./Titlecard.css";
import cards_data from "../../assets/cards/Cards_data";
import {Link} from 'react-router-dom'
const Titlecard = ({ title, category }) => {
  const [apidata,apisetdata] =useState([])
  const cardsref = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
    }
  };
  
  
  const handlewheel = (event) => {
    event.preventDefault();
    cardsref.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => apisetdata(res.results))
    .catch(err => console.error(err));


    cardsref.current.addEventListener("wheel", handlewheel);
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cards_list" ref={cardsref}>
        {apidata.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Titlecard;
