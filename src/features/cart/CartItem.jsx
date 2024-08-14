import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../cart/cartSlice";

function CartItem({ item }) {
    const { name,  image, quantity,totalPrice } = item;
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-lg mb-4 shadow-lg relative">
            <div className="flex items-center space-x-4">
                <img
                    src={image}
                    alt={name}
                    className="w-16 h-16 rounded-lg object-cover border border-gray-300"
                />
                <div>
                    <p className="text-lg font-semibold text-gray-900">{name}</p>
                    <span className="text-gray-400">Qty: {quantity}</span>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="flex items-center justify-center bg-orange-100 text-orange-500 rounded-full p-1 hover:bg-orange-200 transition-colors"
                >
                    <FaMinus className="text-xs" />
                </button>
                <span className="text-lg font-medium text-gray-800">{quantity}</span>
                <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="flex items-center justify-center bg-orange-100 text-orange-500 rounded-full p-1 hover:bg-orange-200 transition-colors"
                >
                    <GoPlus className="text-xs" />
                </button>
            </div>
            <span className="text-xl font-bold text-gray-900">${totalPrice}</span>
        </div>
    );
}

export default CartItem;


