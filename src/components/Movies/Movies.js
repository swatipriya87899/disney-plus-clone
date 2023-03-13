import React, { useState, useEffect } from "react";
import "./Movies.css";
import { useContext } from "react";
import { GlobalData } from "../../App";
import { image_url } from "../../constant/constant";
import { useNavigate } from "react-router-dom";

const Movies = () => {

  const { datas } = useContext(GlobalData);
  const navigate=useNavigate()

  const getRoute =(id) => {
    navigate('/details/'+id);
  }

  return (
    <div className="movies_container">
      <span>Recommended For You</span>
      <div className="movies_group">
        {datas.map((data) => {
         return( <div className="movies_img" key={data.id} onClick={()=>getRoute(data.id)}>
            <img src={image_url+data.poster_path} alt='img'></img>
          </div>)
        })}
      </div>
    </div>
  );
};

export default Movies;
