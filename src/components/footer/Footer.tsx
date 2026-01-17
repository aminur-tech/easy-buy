

import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="md:w-11/12 mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary">EasyShop</h2>
          <p className="mt-4 text-base-content/70 leading-relaxed">
            Simple, fast, and secure shopping experience. 
            Browse products easily and manage items effortlessly.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-6 text-xl">
            <a className="hover:text-primary transition"><FaFacebook /></a>
            <a className="hover:text-primary transition"><FaLinkedin /></a>
            <a className="hover:text-primary transition"><FaGithub /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="space-y-3">
            <li><a className="link link-hover">Home</a></li>
            <li><a className="link link-hover">All Items</a></li>
            <li><a className="link link-hover">Login</a></li>
            <li><a className="link link-hover">Dashboard</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="footer-title">Resources</h3>
          <ul className="space-y-3">
            <li><a className="link link-hover">Documentation</a></li>
            <li><a className="link link-hover">API Reference</a></li>
            <li><a className="link link-hover">Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="footer-title">Stay Updated</h3>
          <p className="text-base-content/70 mb-4">
            Get product updates and offers.
          </p>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-base-300 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/60">
          <p>© {new Date().getFullYear()} EasyShop. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary transition">Privacy Policy</a>
            <a className="hover:text-primary transition">Terms</a>
            <a className="hover:text-primary transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
