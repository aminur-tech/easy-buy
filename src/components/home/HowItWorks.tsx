"use client";

import React from "react";
import { HiShoppingCart, HiSearch, HiPlusCircle } from "react-icons/hi";

const steps = [
  {
    id: 1,
    title: "Browse Products",
    description: "Explore products easily without needing to login or create an account.",
    icon: <HiShoppingCart className="text-primary w-12 h-12 mb-4" />,
  },
  {
    id: 2,
    title: "View Product Details",
    description: "See full product information, reviews, and pricing before buying.",
    icon: <HiSearch className="text-primary w-12 h-12 mb-4" />,
  },
  {
    id: 3,
    title: "Add New Items",
    description: "Add items to your store easily (only available for authenticated users).",
    icon: <HiPlusCircle className="text-primary w-12 h-12 mb-4" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="w-full  text-center">

        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          How It <span className="text-primary">Works</span>
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-12">
          Follow these simple steps to start shopping or managing products in Easy Shop.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center p-8 bg-base-200 border border-base-300 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              {step.icon}
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-base-content/70">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
