"use client";

import React from "react";
import { HiShieldCheck, HiServer, HiUserGroup } from "react-icons/hi";

const trustFeatures = [
  {
    id: 1,
    icon: <HiShieldCheck className="text-primary w-12 h-12 mb-4" />,
    title: "Secure Payments",
    description: "All transactions are encrypted and safe with modern payment gateways.",
  },
  {
    id: 2,
    icon: <HiServer className="text-primary w-12 h-12 mb-4" />,
    title: "Reliable Servers",
    description: "Our platform is built on high-availability servers with 99.9% uptime.",
  },
  {
    id: 3,
    icon: <HiUserGroup className="text-primary w-12 h-12 mb-4" />,
    title: "Trusted by Thousands",
    description: "Over 10,000 happy customers trust Easy Shop for their online shopping needs.",
  },
];

const SecurePlatform = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="w-full max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Secure & <span className="text-primary">Reliable Platform</span>
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-12">
          Easy Shop is built with your security and trust in mind. Shop confidently knowing
          that your data and purchases are safe with us.
        </p>

        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center p-8 bg-base-100 border border-base-300 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-base-content/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurePlatform;
