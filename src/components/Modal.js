import React from "react";

const Modal = ({ modal, imageDetails }) => {
  const divStyle = {
    display: modal ? "block" : "none",
  };

  return (
    <div className="modal" style={divStyle}>
      <div className="modal-content">
        {modal && (
          <img src={imageDetails.download_url} width="600px" height="100%" />
        )}
      </div>
    </div>
  );
};

export default Modal;
