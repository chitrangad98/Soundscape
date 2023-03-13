import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Hire Professional Musicians, Audio Engineers, and Vocalists
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "Rap Artist"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Look for:</span>
            <button>Song Producers</button>
            <button>Vocalists</button>
            <button>Mixing Engineers</button>
            <button>Music Editors</button>
          </div>
        </div>
        <div className="right">
          
        </div>
      </div>
    </div>
  );
}

export default Featured;
