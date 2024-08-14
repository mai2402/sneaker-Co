import Product from "../features/product/Product";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../shared/Button";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCart, increaseQuantity } from "../features/cart/cartSlice";
import { useState } from "react";

function Home() {
    const [quantity ,setQuantity] = useState(1)
    const CartItems = useSelector(getCart);
    const dispatch = useDispatch();
    const itemPrice = 125;
    const totalPrice = quantity * itemPrice;

    const newItem ={
        id:1,
        name:"summer sneaker",
        quantity,
        price:itemPrice,
        image:'/sliderImages/image1.jpg',
        totalPrice,
    }

    function handleIncreaseQnty (){
        setQuantity(prevQnty => prevQnty+1)
    }
    function handleDecreaseQnty (){
        if(quantity >1) setQuantity(prevQnty => prevQnty -1)
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
        <div className="relative">
            <Product/>
            <div className="absolute bottom-[50px] right-[150px]  mb-4 mr-4">
                <Button onClick={handleAddToCart}>
                <AiOutlineShoppingCart
                        className="text-xl transition-transform transform hover:scale-110"/>
                    <span>Add to cart</span>
                </Button>
            </div>
            <span className=" absolute bottom-[50px] right-[400px]  mb-4 mr-4 flex items-center justify-between bg-stone-100 rounded-md py-2 px-4 border-gray-400 hover:bg-gray-200 ">
                  <FaMinus onClick={handleDecreaseQnty}
                   className="text-sm text-orange-500 hover:cursor-pointer mr-5"/>
                    {quantity} 
                  <GoPlus onClick={handleIncreaseQnty} className=" ml-5 text-xl text-orange-500 hover:cursor-pointer"/>
                </span>
        </div>
    );
}

export default Home;

