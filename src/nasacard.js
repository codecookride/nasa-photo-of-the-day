import React from "react";

const nasaCard = props => {
  console.log(props);
  return (
    <div >
     <h3>nasa card</h3>
     <img alt="stars" src={props.image.url} />
    </div>
  );
};
export default nasaCard;