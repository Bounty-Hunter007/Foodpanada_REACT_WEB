import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCartToStore } from "../store/cart";
import { getSingleRestaurant } from "../config/firebase";
import { useParams } from "react-router-dom";

function RestroDetail() {
  const { restro_id } = useParams();
  const [restroData, setRestroData] = useState();
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getSingleRestaurant(restro_id);
    setRestroData(data);
    console.log("data-->", data);
  };

  if (!restroData) {
    return <div>Loading...</div>;
  }

  const { opening_hours, restaurant_name, menu } = restroData;

  const open_hrs = [];

  for (let key in opening_hours) {
    open_hrs.push(`${key}: ${opening_hours[key]}`);
  }

  const addToCart = (item) => {
    dispatch(addCartToStore(item));
    console.log('item..',item)
  };

  return (
    <div>
      <div className="head">
        <center>
        <h1>{restaurant_name}</h1>
        </center>
      </div>
      <div className="timing"> 
        <h3>Timings</h3>
        {open_hrs.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="menu">
        <ul>
          {menu.map((item) => {
            return (
              <li>
                {item.item}{" "}
                <button onClick={() => addToCart(item)}>Add to cart</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RestroDetail;
