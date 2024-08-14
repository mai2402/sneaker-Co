import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import CartItem from "./CartItem";
import Order from "../order/Order";

function Cart() {
    const cart = useSelector(getCart);

    return (
        <div className="flex justify-center space-x-8 mt-8">
            <div className="w-1/2 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cart</h2>
                {cart.length > 0 ? (
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <CartItem item={item} key={item.id} />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center">Your cart is empty</p>
                )}
            </div>
            <div className="w-1/2 p-6 rounded-lg">
              { cart.length>0 && <Order item={cart.length > 0 ? cart[0] : null}/>}
            </div>
        </div>
    );
}

export default Cart;



