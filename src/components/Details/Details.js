import React from "react";
import "./Details.css";
import { posture_image_url } from "../../constant/constant";
import { useContext } from "react";
import { GlobalData } from "../../App";
import { useParams } from "react-router-dom";

const Details = () => {
  const {datas}=useContext(GlobalData);
  const {id}=useParams()

  return (
    <div className="details">
   {   console.log(datas)}
    {datas.map((data)=>{
      console.log(data);
      return(
        data.id==id &&
        <div>
        <div className="details_background">
        <img src={posture_image_url+data.backdrop_path} width="100vw"></img>
      </div>
      <div>
        <div className="movie_title">{data.title}</div>
        {console.log("data"-data)}
      </div>
      <div className="control_buttons">
          <button className="play_button button">
              <img src="/images/play-icon-black.png"></img>
              <span>PLAY</span>
          </button>
          <button className="trailer_button button">
          <img src="/images/play-icon-white.png"></img>
              <span>Trailer</span>
          </button>
          <button className="add_button round_button">
              <span>+</span>
          </button>
          <button className="group_watch_button round_button">
              <img src="/images/group-icon.png"></img>
          </button>
      </div>
      <div className="sub_title">
          2018 | 10 | Family, Fantasy, Kids, Animation
      </div>
      <div className="description">
        {data.overview}
      </div>
      </div>
      )
    })}
    </div>
  );
};

export default Details;
