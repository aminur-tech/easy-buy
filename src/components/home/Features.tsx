"use client";

import React from "react";

const features = [
  {
    id: 1,
    title: "Simple Product Browsing",
    description:
      "Find your favorite products easily with clean categories, search, and smart filters.",
    icon: "🛒",
  },
  {
    id: 2,
    title: "Fast & Responsive UI",
    description:
      "Enjoy a smooth shopping experience with lightning-fast load times on all devices.",
    icon: "⚡",
  },
  {
    id: 3,
    title: "Easy Product Management",
    description:
      "Manage products effortlessly with a simple and intuitive admin-friendly system.",
    icon: "📦",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-primary">Easy Buy?</span>
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            We make online shopping simple, fast, and hassle-free — designed for
            both customers and sellers.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="card bg-base-200 border border-base-300 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-base-content/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
