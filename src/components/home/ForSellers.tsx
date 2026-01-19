"use client";

import Link from "next/link";
import React from "react";
import { HiPlusCircle, HiClipboardList, HiLockClosed } from "react-icons/hi";

const adminFeatures = [
  {
    id: 1,
    icon: <HiPlusCircle className="text-primary w-12 h-12 mb-4" />,
    title: "Add New Items",
    description: "Securely add new products to your store with full control over details.",
  },
  {
    id: 2,
    icon: <HiClipboardList className="text-primary w-12 h-12 mb-4" />,
    title: "Manage Inventory",
    description: "Keep your stock up to date, track sales, and manage your product list easily.",
  },
  {
    id: 3,
    icon: <HiLockClosed className="text-primary w-12 h-12 mb-4" />,
    title: "Protected Access",
    description: "Features are only accessible when logged in, ensuring security and privacy.",
  },
];

const ForSellers = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="w-full  text-center">

        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          For <span className="text-primary">Sellers & Admins</span>
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-12">
          Advanced features for sellers and admins to manage their store efficiently.
        </p>

        {/* Admin Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {adminFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center p-8 bg-base-200 border border-base-300 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-base-content/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link href={`/add-products`} className="btn btn-primary btn-lg rounded-xl shadow-lg hover:shadow-primary/30 transition-all">
             Add Items
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForSellers;
