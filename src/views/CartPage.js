import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartPage(props) {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector(state => state.cart);
const navigate = useNavigate();

  let totalPrice = 0;
  cart.map((item) => {
    console.log("item-->",item)
    totalPrice += item.price;
  });

  const carty = () => {
    navigate('/cart');
  };

  return (
    <div className="cartPage" onClick={carty}>
      <div onClick={() => setShowCart(!showCart)} style={{}}>
        {cart.length}
      </div>

      {showCart && (
        <div
          style={{ backgroundColor: "white", width: "300px", color: "black" }}
        >
          {cart.map((item) => {
            return (
              <div>
                {item.item} | Rs.{item.price}
              </div>
            );
          })}
          <p>
            <b>Total Price: Rs. {totalPrice}</b>
          </p>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
}
