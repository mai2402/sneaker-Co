import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart, decreaseQuantity, increaseQuantity, emptyCart, removeFromCart } from "./cartSlice";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(getCart);
    const navigate = useNavigate();

    function handleCheckOut() {
        setIsOpen(!isOpen);
        navigate("/cart");
    }

    return (
        <div className="relative">
            {!isOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {cart.length > 0 ? (
                        <ul className="p-4 space-y-4">
                            {cart.map((item) => (
                                <li key={item.id} className="flex items-center justify-between p-2 border-b">
                                    <div className="flex items-center space-x-4">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                                        <div>
                                            <span className="text-gray-800 font-semibold ">{item.name}</span>
                                            <div className="flex items-center space-x-2 mt-1">
                                                <button
                                                    onClick={() => dispatch(decreaseQuantity(item.id))}
                                                    className="bg-orange-100 text-orange-500 rounded-full p-1 hover:bg-orange-200 transition-colors"
                                                >
                                                    <FaMinus className="text-xs" />
                                                </button>
                                                <span className="text-sm text-gray-600">{item.quantity} x ${item.price}</span>
                                                <button
                                                    onClick={() => dispatch(increaseQuantity(item.id))}
                                                    className="bg-orange-100 text-orange-500 rounded-full p-1 hover:bg-orange-200 transition-colors"
                                                >
                                                    <GoPlus className="text-xs" />
                                                </button>
                                            </div>
                                            <span className="block text-sm text-black font-bold mt-4">Total: ${item.totalPrice}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <MdDeleteOutline className="text-lg" />
                                    </button>
                                </li>
                            ))}
                            <li className="mt-4">
                                <button
                                    onClick={handleCheckOut}
                                    className="w-full text-center bg-orange-500 text-white py-2 rounded-md font-semibold shadow-md hover:bg-orange-600 transition-colors"
                                >
                                    Check Out
                                </button>
                            </li>
                        </ul>
                    ) : (
                        <p className="p-4 text-center text-gray-500">Your cart is empty.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default DropDown;


