import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6180608&lng=73.77058459999999&restaurantId=23728&catalog_qa=undefined&submitAction=ENTER"
    );
    let json = await data.json();

    setResInfo(json.data);
    console.log("resInfo", resInfo, json);
  };
  if (resInfo === null) return <Shimmer />;
  const { name } = resInfo?.cards[0]?.card?.card?.info;
  return resInfo === null ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="res-menu-container">
      <h1>{name}</h1>
    </div>
  );
};
export default RestaurantMenu;
