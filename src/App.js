import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function App() {
  const axios = require("axios");
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  const [images, setImages] = useState([]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getImages = () =>{
    axios.get(url).then((res) => {
      console.log(res.data.drinks);
      setImages(res.data.drinks);
    });
  };

  useEffect(() => {
    getImages();
  }, [getImages]);
  
  if(!images){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {images.map((image) => {
        return <LazyLoadImage src={image.strDrinkThumb} height="500px" width="400px" />
      })}
    </div>
  )
}

export default App