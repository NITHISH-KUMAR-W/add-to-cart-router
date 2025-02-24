import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const { cart } = useContext(CartContext);

    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <Link to="/" className="text-lg font-bold">Home</Link>
            <Link to="/cart" className="text-lg font-bold">
                Cart ({cart.length})
            </Link>
        </nav>
    );
};

export default Navbar;