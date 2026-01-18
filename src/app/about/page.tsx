import React from "react";

interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

const AboutPage: React.FC = () => {
  const values: CoreValue[] = [
    {
      title: "Quality Products",
      description: "Carefully selected items ensuring long-lasting value and trust.",
      icon: "🛍️",
    },
    {
      title: "Fast Delivery",
      description: "Lightning-fast delivery system that respects your time.",
      icon: "🚚",
    },
    {
      title: "Secure Payment",
      description: "Protected transactions with modern encryption technology.",
      icon: "🔒",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 
    text-slate-800 dark:text-slate-200 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Hero Section */}
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Easy-Buy
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Making online shopping simple, affordable, and accessible for everyone.
            Founded in 2024, Easy-Buy redefines modern e-commerce experiences.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-14 items-center mb-28">
          <div className="p-10 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur 
          shadow-lg hover:shadow-xl transition-all border border-slate-200/50 dark:border-slate-800">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-cyan-400">
              Our Mission
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              At <strong>Easy-Buy</strong>, we remove complexity from online shopping.
              Our curated platform combines quality products, transparent pricing, and
              exceptional user experience — all in one place.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              We are more than a marketplace. Easy-Buy is a customer-first ecosystem
              where reliability, speed, and trust come standard.
            </p>

            <ul className="space-y-2">
              {[
                "High-quality curated products",
                "Fast & reliable delivery",
                "Secure and smooth checkout",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-28">
          <h2 className="text-4xl font-bold text-center mb-14">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white dark:bg-slate-900
                border border-slate-100 dark:border-slate-800
                shadow-md hover:shadow-xl hover:-translate-y-1
                transition-all duration-300"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <footer className="relative overflow-hidden rounded-3xl p-16 text-center bg-gradient-to-r 
        from-blue-600 to-cyan-500 text-white shadow-xl">

          <div className="absolute inset-0 bg-black/10"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have Questions?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Our support team is available 24/7 for you.
            </p>

            <button
              className="bg-white text-blue-600 font-semibold px-10 py-4 rounded-full
              hover:scale-105 hover:shadow-2xl transition"
            >
              Contact Us
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default AboutPage;
