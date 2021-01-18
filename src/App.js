import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import Gallery from "./components/Gallery";
import "./App.css";

const fetchData = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setImages(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000}
        />
      ) : (
        <Gallery images={images} />
      )}
    </div>
  );
};

export default App;
