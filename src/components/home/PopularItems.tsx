"use client";

import React from "react";

const popularItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59.99",
    image: "https://cdn-icons-png.flaticon.com/512/727/727399.png",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$89.99",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920346.png",
  },
  {
    id: 3,
    name: "Portable Speaker",
    price: "$39.99",
    image: "https://cdn-icons-png.flaticon.com/512/744/744922.png",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "$29.99",
    image: "https://cdn-icons-png.flaticon.com/512/2910/2910762.png",
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: "$24.99",
    image: "https://cdn-icons-png.flaticon.com/512/3039/3039364.png",
  },
  {
    id: 6,
    name: "LED Desk Lamp",
    price: "$19.99",
    image: "https://cdn-icons-png.flaticon.com/512/2910/2910767.png",
  },
];

const PopularItems = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="w-full text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Popular <span className="text-primary">Items</span>
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-12">
          Check out our top-selling products loved by customers.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {popularItems.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="card bg-base-200 border border-base-300 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-lg font-bold text-primary mb-4">{item.price}</p>
              <button className="btn btn-outline btn-primary w-full">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="btn btn-primary btn-lg rounded-xl shadow-lg hover:shadow-primary/30 transition-all">
            View All Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
