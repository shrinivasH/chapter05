import React from "react";
import { CDN_URL } from "../utils/constants";

/* Inline css */
const cardStyle = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  /* destructuring the object */
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card" style={cardStyle}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{avgRating} Starts</h4>
      <h4> {resData.info.sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
