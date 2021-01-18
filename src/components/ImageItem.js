import React, { useState } from "react";

import Loader from "react-loader-spinner";

const ImageItem = ({ url }) => {
  const [loaded, setLoaded] = useState(false);

  function onLoad() {
    console.log("loaded");
    setLoaded(true);
  }
  return (
    <div>
      <img
        src={url}
        onLoad={onLoad}
        width="100%"
        height="300px"
        className="imgItem"
      />

      {!loaded && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={50}
          width={50}
          timeout={5000}
        />
      )}
    </div>
  );
};

export default ImageItem;
