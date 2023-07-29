// GifListContainer.js
import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);

  const handleSearch = (query) => {
    const apiKey = "LNI1rLNI1rqiXniMM9vTbDpwLCfBlnIQsWqcK";
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=3`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const gifData = data.data.map((gif) => gif.images.original.url);
        setGifs(gifData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;