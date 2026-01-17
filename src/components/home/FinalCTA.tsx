"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      {/* Abstract Glass Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 skew-y-12 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Subtle Label */}
          <span className="inline-block px-4 py-1 mb-6 border border-white/30 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-white/90 bg-white/10 backdrop-blur-md">
            Your Journey Starts Here
          </span>

          {/* Clean Typography */}
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-none">
            Shop Smarter. <br />
            <span className="text-white/80">Live Better.</span>
          </h2>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/80 mb-12 leading-relaxed">
            Join the <span className="text-white font-bold underline decoration-white/30 underline-offset-4">easyShop</span> family today and experience the future of online shopping with premium support.
          </p>

          {/* High-End Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <motion.button
              whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white text-indigo-600 font-bold rounded-2xl shadow-xl transition-all flex items-center gap-2 group"
            >
              Get Started Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="px-10 py-5 border-2 border-white/40 text-white font-bold rounded-2xl backdrop-blur-sm transition-colors"
            >
              Explore Products
            </motion.button>
          </div>

          {/* Achievement Row */}
          <div className="mt-20 flex flex-wrap justify-center gap-10 md:gap-20 opacity-60 text-white border-t border-white/10 pt-10">
            <div className="text-center">
              <div className="text-2xl font-bold">50k+</div>
              <div className="text-xs uppercase tracking-widest font-medium">Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-xs uppercase tracking-widest font-medium">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs uppercase tracking-widest font-medium">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;