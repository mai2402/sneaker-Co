import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import DropDown from "./DropDown";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";

function CartIcon() {
    const [isOpen, setIsOpen] = useState(false);
    const cart = useSelector(getCart);
    const cartLength = cart.length
    function handleToggleCart() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative">
            <button
                onClick={handleToggleCart}
                className="text-gray-800 hover:text-orange-500 transition-transform transform hover:scale-110"
            >
                <AiOutlineShoppingCart className="text-3xl" />
                { cart.length === 0 ? 
                     <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-orange-500 text-white text-xs rounded-full"> 
                      0
                     </span> 
                :(
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-orange-500 text-white text-xs rounded-full">
                        {cartLength}
                    </span>)}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                    <DropDown />
                </div>
            )}
        </div>
    );
}

export default CartIcon;
