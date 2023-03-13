import React from "react";
import "./Viewers.css";

const Viewers = () => {
  const viewersUrl = [
    "/images/viewers-disney.png",
    "/images/viewers-pixar.png",
    "/images/viewers-marvel.png",
    "/images/viewers-starwars.png",
    "/images/viewers-national.png",
  ];
  return (
    <div className="viewers_container">
      {viewersUrl.map((url) => {
        return (
          <div className="viewer">
            <img src={url}></img>
          </div>
        );
      })}
    </div>
  );
};

export default Viewers;
