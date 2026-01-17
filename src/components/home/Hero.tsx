"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const images = [
    "https://i.ibb.co/Y7b4bgQN/12.jpg",
    "https://i.ibb.co/gLs7PH5z/22.jpg",
    "https://i.ibb.co/tpR9zY6j/32.jpg"
  ];

  const [current, setCurrent] = useState(0);

  // Auto-change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[80vh] bg-base-200 overflow-hidden relative mt-2">
      {/* Decorative Background */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="w-full px-6 lg:px-16 max-w-full">
        <div className="grid grid-cols-12 items-center gap-12 min-h-[80vh]">
          {/* LEFT – Content */}
          <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Welcome to easyShop
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
              Shop{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Smarter
              </span>
              ,<br /> Live Better.
            </h1>

            <p className="py-6 text-lg text-base-content/70 max-w-xl mx-auto lg:mx-0">
              Discover quality products at unbeatable prices. Simple, fast, and
              reliable shopping — everything you need, delivered to your door.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/products"
                className="btn btn-lg rounded-xl border-none text-white bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 transition-colors duration-300"
              >
                Shop Now →
              </Link>

              <button className="btn btn-ghost btn-lg rounded-xl border border-gray-300 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
                Browse Categories
              </button>
            </div>

            <div className="mt-10 text-xs font-semibold uppercase tracking-widest opacity-60">
              Trusted by 10k+ customers
            </div>
          </div>

          {/* RIGHT – Image Carousel */}
          <motion.div
            className="col-span-12 lg:col-span-6 relative flex justify-center"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="relative bg-base-100 p-8 rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute -bottom-4 -left-4 badge badge-lg badge-accent p-6 shadow-xl font-bold">
                Up to 50% Off
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
