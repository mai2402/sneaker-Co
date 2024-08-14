import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart, getCart, increaseQuantity } from "../features/cart/cartSlice";

function SneakerItem({ sneaker }) {
    const { id, name, image, description, price } = sneaker;
    const [quantity, setQuantity] = useState(1);
    const [isAddedToCart] = useState(false);
    const CartItems = useSelector(getCart);
    const dispatch = useDispatch();
    const itemPrice = sneaker.price;
    const totalPrice = quantity * itemPrice;

    const newItem = {
        id: sneaker.id,
        name: sneaker.name,
        quantity,
        price: itemPrice,
        image: sneaker.image,
        totalPrice,
    };

    function handleIncreaseQnty() {
        setQuantity((prevQnty) => prevQnty + 1);
    }

    function handleDecreaseQnty() {
        if (quantity > 1) setQuantity((prevQnty) => prevQnty - 1);
    }

    function handleAddToCart() {
        // Check if the item already exists in the cart
        const existingItem = CartItems.find((item) => item.id === newItem.id);

        if (existingItem) {
            // If item exists, dispatch action to increase quantity
            dispatch(increaseQuantity(newItem.id));
        } else {
            // If item does not exist, add the new item to the cart
            const newItemWithUpdatedQuantity = { ...newItem, quantity };
            dispatch(addToCart(newItemWithUpdatedQuantity));
        }
    }

    return (
        <li className="relative mb-6 border border-orange-300 hover:bg-orange-100 hover:cursor-pointer rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center space-x-4">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-32 h-32 object-cover rounded-lg shadow-md" 
                />
                <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">{name}</h3>
                    <p className="text-gray-600 mb-2">{description}</p>
                    <span className="text-lg font-bold text-gray-900">${price}</span>
                </div>
            </div>
            {/* Container for button and quantity controls */}
            <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center bg-stone-100 rounded-md py-2 px-4 border border-gray-400 hover:bg-gray-200 shadow-sm">
                    <FaMinus 
                        onClick={handleDecreaseQnty}
                        className="text-sm text-orange-500 hover:cursor-pointer mr-5"
                    />
                    <span className="text-lg font-semibold">{quantity}</span>
                    <GoPlus 
                        onClick={handleIncreaseQnty}
                        className="ml-5 text-xl text-orange-500 hover:cursor-pointer"
                    />
                </div>
               
               
               
                <button 
                    onClick={handleAddToCart}
                    className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600 transition-colors"
                >
                    Add to Cart
                </button>
              
            </div>
        </li>
    );
}

export default SneakerItem;


