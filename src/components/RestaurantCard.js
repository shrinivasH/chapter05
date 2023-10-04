import React from "react";
import { CDN_URL } from "../utils/constants";
import { Ratings } from "../icons/Ratings";

/* Inline css */
const cardStyle = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  /* destructuring the object */
  const { cloudinaryImageId, name, cuisines, avgRating, locality } =
    resData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="restaurant-meta-info">
        <div className="restaurant-title">{name}</div>
        <div className="restaurant-cuisine ">{cuisines.join(" ,")}</div>
        <div className="restaurant-sub-menu-rating ">
          <div>
            <Ratings />
          </div>
          <div className="restaurant-ratings" style={{ marginTop: "-4px" }}>
            {avgRating}
          </div>
        </div>
        <div className="restaurant-locality"> {locality}</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
