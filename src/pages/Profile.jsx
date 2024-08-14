import React from 'react';

function Profile() {
  return (
    <div className="flex max-w-6xl mx-auto p-6 space-x-8">
      {/* Profile Section */}
      <div className="profile w-1/3 p-6 border border-orange-500 rounded-lg shadow-md">
        <img 
          src="/image-avatar.png" 
          alt="avatar" 
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-300" 
        />
        <h1 className="text-2xl font-bold mb-2">Alex Johnson</h1>
        <p className="text-gray-700 mb-1">alex.johnson@example.com</p>
        <p className="text-gray-700 mb-1">+123 456 7890</p>
        <p className="text-gray-700 mb-4">123 Sneaker St, Style City, SC 45678</p>
      </div>

      {/* Previous Orders Section */}
      <div className="previous-orders w-2/3">
        <h2 className="text-xl font-semibold mb-4">Previous Orders</h2>
        <ul>
          <li className="mb-4">
            <div className="order p-4 border border-orange-500 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-1">August 10, 2024</p>
              <p className="text-gray-800 font-medium mb-1">Order #001234</p>
              <p className="text-gray-800 mb-1">Total: $120.00</p>
              <p className="text-gray-700">Items: Nike Air Max 270, Adidas Ultraboost</p>
            </div>
          </li>
          <li className="mb-4">
            <div className="order p-4 border border-orange-500 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-1">July 22, 2024</p>
              <p className="text-gray-800 font-medium mb-1">Order #001233</p>
              <p className="text-gray-800 mb-1">Total: $90.00</p>
              <p className="text-gray-700">Items: Converse Chuck Taylor All Star</p>
            </div>
          </li>
          <li>
            <div className="order p-4 border border-orange-500 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-1">June 15, 2024</p>
              <p className="text-gray-800 font-medium mb-1">Order #001232</p>
              <p className="text-gray-800 mb-1">Total: $150.00</p>
              <p className="text-gray-700">Items: Puma RS-X, Reebok Classic</p>
            </div>
          </li>
          <li className="mb-4">
            <div className="order p-4 border border-orange-500 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-1">July 22, 2024</p>
              <p className="text-gray-800 font-medium mb-1">Order #001233</p>
              <p className="text-gray-800 mb-1">Total: $90.00</p>
              <p className="text-gray-700">Items: Converse Chuck Taylor All Star</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;


