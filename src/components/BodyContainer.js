import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const BodyContainer = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search a restaurant..."
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurnat) => (
          <RestaurantCard key={restaurnat.info.id} resData={restaurnat} />
        ))}
      </div>
    </div>
  );
};
export default BodyContainer;
