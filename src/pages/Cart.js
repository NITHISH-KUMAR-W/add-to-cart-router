import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = total * 0.1;
    const finalTotal = total - discount;

    return (
        <div className="p-4">
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="border p-4 rounded-lg flex justify-between items-center">
                            <h2>{item.title}</h2>
                            <p>${item.price}</p>
                            <div className="flex items-center">
                                <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-300 p-1">-</button>
                                <span className="px-4">{item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)} className="bg-gray-300 p-1">+</button>
                            </div>
                            <p>${item.price * item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white p-2">Remove</button>
                        </div>
                    ))}
                    <h2 className="text-xl font-bold">Total: ${finalTotal.toFixed(2)}</h2>
                </>
            )}
        </div>
    );
};

export default Cart;