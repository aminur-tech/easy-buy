import React from "react";
import { ShoppingBag, ShieldCheck, Truck, Sparkles, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section className="relative bg-base-100 py-24 px-6 overflow-hidden">
      {/* Structural Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-base-200/50 -skew-x-12 translate-x-32 -z-10" />
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-ping opacity-20" />

      <div className="md:w-11/12 mx-auto">
        
        {/* Section Header: Left Aligned for a Modern Corporate Look */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
              
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6">
              The platform built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">modern trade.</span>
            </h1>
          </div>
          <p className="text-xl text-base-content/60 max-w-md pb-2 leading-relaxed border-l-2 border-base-300 pl-6">
            We bridge the gap between complex logistics and effortless user experience. Trusted by thousands of sellers.
          </p>
        </div>

        {/* Feature Grid: Elevated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            {
              icon: <ShoppingBag />,
              title: "Unified Commerce",
              desc: "A singular interface for all your shopping needs, optimized for any device.",
            },
            {
              icon: <Truck />,
              title: "Global Logistics",
              desc: "Smart tracking and fulfillment systems designed for speed and reliability.",
            },
            {
              icon: <ShieldCheck />,
              title: "Enterprise Security",
              desc: "End-to-end encryption and multi-factor authentication for every transaction.",
            },
            {
              icon: <Sparkles />,
              title: "Tailored Experience",
              desc: "AI-driven product recommendations that understand your unique style.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-base-100 border border-base-300 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(item.icon, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-base-content/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Brand Mission & Data Visualization Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Mission Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our core philosophy.</h2>
            <div className="space-y-6 text-lg text-base-content/70">
              <p>
                At <span className="font-semibold text-base-content uppercase tracking-tighter">Easy Buy</span>, we believe technology should disappear. The most powerful tools are the ones you don`&apos;`t have to think about.
              </p>
              <p>
                Our architecture is built on a API-first mentality, ensuring that whether you are a buyer or a seller, the data is accurate, the speed is instant, and the security is absolute.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold italic">Reliability is our greatest feature.</span>
                    <span className="text-sm uppercase tracking-widest opacity-50 mt-2">— Engineering Team</span>
                </div>
            </div>
          </div>

          {/* Stats Card: High Professionalism */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] blur-2xl" />
            <div className="relative h-full bg-base-200 border border-base-300 rounded-[2.5rem] p-10 overflow-hidden">
              <div className="grid grid-cols-2 gap-8 relative z-10">
                {[
                    { label: "Inventory", val: "10k+", color: "text-primary" },
                    { label: "Merchants", val: "500+", color: "text-secondary" },
                    { label: "Uptime", val: "99.9%", color: "text-primary" },
                    { label: "SLA", val: "Instant", color: "text-secondary" }
                ].map((stat, idx) => (
                    <div key={idx} className="p-4 bg-base-100 rounded-2xl shadow-sm">
                        <p className={`text-3xl font-black ${stat.color}`}>{stat.val}</p>
                        <p className="text-xs uppercase font-bold tracking-widest opacity-50 mt-1">{stat.label}</p>
                    </div>
                ))}
              </div>
              
              {/* Abstract Professional Graphic */}
              <div className="mt-12 flex items-center justify-between p-6 bg-primary text-primary-content rounded-2xl shadow-lg shadow-primary/20">
                <div>
                    <p className="text-sm font-bold opacity-80 uppercase tracking-widest">System Status</p>
                    <p className="text-xl font-bold">All Systems Operational</p>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA: Professional Conversion */}
        <div className="mt-32 p-1 bg-gradient-to-r from-primary/20 via-base-300 to-secondary/20 rounded-[3rem]">
            <div className="bg-base-100 rounded-[2.8rem] py-16 px-8 text-center border border-white/10">
                <h2 className="text-4xl font-bold mb-6">Let`&apos;`s build the future of your business.</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/products" className="btn btn-primary btn-lg rounded-full px-10 group">
                        Start Shopping
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="btn btn-ghost btn-lg rounded-full px-10 border border-base-300">
                        Become a Seller
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;