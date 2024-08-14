import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

function SubmitOrder() {
  const [showInput, setShowInput] = useState(false);

  return (
    <form className="max-w-lg mx-auto p-6 border border-gray-200 rounded-lg shadow-md space-y-4 mt-4 bg-white">
      <div>
        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input 
          id="full-name" 
          name="full-name" 
          type="text" 
          required 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input 
          id="phone-number" 
          name="phone-number" 
          type="tel" 
          required 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input 
          id="address" 
          name="address" 
          type="text" 
          required 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Payment</label>
        <div className="mt-2 flex justify-around">
          <div className="flex items-center">
            <FontAwesomeIcon 
              onClick={() => setShowInput(!showInput)} 
              icon={faCcVisa} 
              className="hover:cursor-pointer text-blue-600 text-4xl" 
            />
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon 
              onClick={() => setShowInput(!showInput)} 
              icon={faCcMastercard} 
              className="hover:cursor-pointer text-green-800 text-4xl" 
            />
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon 
              onClick={() => setShowInput(!showInput)} 
              icon={faCcAmex} 
              className="hover:cursor-pointer text-4xl" 
            />
          </div>
        </div>

        {showInput && (
          <div className="mt-4 space-y-3">
            <input 
              id="cardNo" 
              name="cardNo" 
              type="text" 
              required 
              placeholder="Enter card number" 
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
            <div className="flex space-x-4">
              <input 
                id="expDate" 
                name="expDate" 
                type="text" 
                required 
                placeholder="MM/YY" 
                className="block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
              <input 
                id="cvv" 
                name="cvv" 
                type="text" 
                required 
                placeholder="CVV" 
                className="block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
            </div>
          </div>
        )}
      </div>

      <button 
        type="submit" 
        className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-md shadow-sm hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300"
      >
        Submit
      </button>
    </form>
  );
}

export default SubmitOrder;

