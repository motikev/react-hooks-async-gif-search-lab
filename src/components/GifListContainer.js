import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);

  const handleSearch = (query) => {
    // Replace 'YOUR_API_KEY' with your actual Giphy API key
    const apiKey = "Bkc6e5NAh5ft8gbOhxHUb3Tr6sFd0Fgy";
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=3`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
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
