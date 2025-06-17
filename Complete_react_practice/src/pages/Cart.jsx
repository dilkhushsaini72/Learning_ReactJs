import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProducts = useSelector((state) => state.Cart.cartItems);
  console.log(cartProducts);

  return (
    <div>
      <h2 className="text-center text-2xl capitalize">Cart Products</h2>
      <div>
        {cartProducts.length ? (
          <div>
            {cartProducts.map((item) => (
              <div className="flex justify-around items-center">
                <img src={item.image} width={50} alt={item.title} />
                <div>{item.title}</div>
                <div>{`$${item.price}`}</div>
                <button className="bg-amber-200 rounded px-2">Delete</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="min-h-100  flex flex-col justify-center items-center">
            <p className="p-8">Your cart is empty</p>
            <Link to={"/products"}>
              <button className="bg-blue-400 px-3 py-1 rounded-xl font-bold text-white hover:bg-blue-700 cursor-pointer">Continue Shopping</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
