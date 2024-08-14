import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart } from "../cart/cartSlice";

function Order() {
    const cart = useSelector(getCart);
    const navigate = useNavigate();

    // Calculate total payment for the entire cart
    const totalPayment = cart.reduce((total, item) => total + item.totalPrice, 0);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
            <h1 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h1>
            {cart.map((item) => (
                <div key={item.id} className="mb-4">
                    <p className="text-lg text-gray-700 font-semibold mb-2">{item.name}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">{item.quantity} x ${item.price}</span>
                        <span className="text-gray-800 font-bold">Total: ${item.totalPrice}</span>
                    </div>
                </div>
            ))}
            <div className="flex justify-between items-center mt-5">
                <span className="text-lg font-bold text-gray-800">Total Payment:</span>
                <span className="text-lg font-bold text-gray-900">${totalPayment}</span>
            </div>
            <button
                onClick={() => navigate("/submit-order")}
                className="mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-md font-semibold shadow-md hover:bg-orange-600 transition-colors"
            >
                Proceed to Checkout
            </button>
        </div>
    );
}

export default Order;



