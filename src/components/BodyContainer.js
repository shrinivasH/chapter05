import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { FilterIcon } from "../icons/FilterIcon";
import { SWIGGY_APP_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const BodyContainer = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurant();
  }, []);
  const getRestaurant = async () => {
    const response = await fetch(SWIGGY_APP_URL);
    const json = await response.json();
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="meta-info">
        <div className="search-parent">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search a restaurant..."
              className="search-input"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                const filteredList = listOfRestaurant.filter((res) => {
                  return res.info.name
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase());
                });
                setFilteredRestaurant(filteredList);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let result = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(result);
            console.log("Result", result);
          }}
        >
          <span className="btn-sp"> Filter</span> <FilterIcon></FilterIcon>
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurnat) => (
          <RestaurantCard key={restaurnat.info.id} resData={restaurnat} />
        ))}
      </div>
    </div>
  );
};
export default BodyContainer;
