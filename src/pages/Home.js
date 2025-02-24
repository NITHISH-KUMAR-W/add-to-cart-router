import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Home = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg">
                    <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <p>${product.price}</p>
                    <button
                        className="bg-blue-500 text-white p-2 mt-2"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Home;