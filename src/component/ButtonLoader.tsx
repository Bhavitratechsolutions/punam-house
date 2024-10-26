import React from "react";

const ButtonLoader = () => {
  // return <div className="lds-dual-ring"></div>;
   return <div className="spinner-grow text-primary" role="status"><span className="visually-hidden">Loading...</span></div>;
 
};

export default ButtonLoader;
