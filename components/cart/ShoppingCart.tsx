'use client';

import React from 'react';
import { ShoppingBag, Clock, X, Plus, Minus, HelpCircle } from 'lucide-react';

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        {/* Cart Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-emerald-600" />
            <h1 className="text-xl font-semibold text-gray-900">Your Wellness Cart</h1>
          </div>
          <span className="text-sm text-gray-600">3 items</span>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          <CartItem 
            name="Calm Mind Tincture"
            type="Wellness Tincture"
            effects={["Relaxation", "Mental Clarity"]}
            duration="4-6 hours"
            quantity={2}
            price={45.00}
            image="/api/placeholder/400/400"
          />
          
          <CartItem 
            name="Sleep Support Gummies"
            type="Sleep Aid"
            effects={["Better Sleep", "Relaxation"]}
            duration="6-8 hours"
            quantity={1}
            price={35.00}
            image="/api/placeholder/400/400"
          />

          <CartItem 
            name="Energy Boost Capsules"
            type="Energy Support"
            effects={["Energy", "Focus"]}
            duration="8-10 hours"
            quantity={1}
            price={40.00}
            image="/api/placeholder/400/400"
          />
        </div>

        {/* Recommended Items */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended With Your Items</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <RecommendedItem 
              name="Wellness Journal"
              type="Tracking Tool"
              description="Track your wellness journey"
              price={25.00}
            />
            <RecommendedItem 
              name="Dosage Timer"
              type="Wellness Accessory"
              description="Smart timing for optimal results"
              price={30.00}
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>$165.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>$13.20</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between font-semibold text-gray-900">
                <span>Total</span>
                <span>$183.20</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 mt-6">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ name, type, effects, duration, quantity, price, image }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    <div className="p-4">
      <div className="flex gap-4">
        {/* Image Container */}
        <div className="w-24 h-24 flex-shrink-0">
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={image} 
              alt={name} 
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>


        {/* Content */}
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{name}</h3>
              <p className="text-sm text-gray-600 mb-2">{type}</p>
              
              {/* Effects */}
              <div className="flex flex-wrap gap-2 mb-2">
                {effects.map((effect, index) => (
                  <span 
                    key={index} 
                    className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    {effect}
                  </span>
                ))}
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{duration}</span>
              </div>
            </div>
            
            <button className="text-gray-400 hover:text-gray-500">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-gray-900 w-8 text-center">{quantity}</span>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <div className="text-lg font-medium text-gray-900">${price.toFixed(2)}</div>
      </div>
    </div>
  </div>
);

const RecommendedItem = ({ name, type, description, price }) => (
    <div className="flex gap-4 p-4 border border-gray-100 rounded-lg">
      <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
        <HelpCircle className="w-6 h-6 text-gray-400" />
      </div>
      <div className="flex-grow">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 mb-1">{type}</p>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-900">${price.toFixed(2)}</span>
          <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

export default CartPage;