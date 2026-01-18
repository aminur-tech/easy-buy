import React from 'react';

interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

const AboutPage: React.FC = () => {
  const values: CoreValue[] = [
    {
      title: "Quality Products",
      description: "We source only the best items to ensure your satisfaction with every purchase.",
      icon: "🛍️"
    },
    {
      title: "Fast Delivery",
      description: "Easy-Buy ensures your packages reach your doorstep in record time.",
      icon: "🚚"
    },
    {
      title: "Secure Payment",
      description: "Your security is our priority. We use industry-leading encryption for all transactions.",
      icon: "🔒"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 font-sans text-gray-800">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          About <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Easy-Buy</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Making online shopping simple, affordable, and accessible for everyone. 
          Founded in 2024, we aim to redefine how you experience e-commerce.
        </p>
      </section>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-semibold mb-4 text-blue-800">Our Mission</h2>
          <p className="leading-relaxed text-gray-700">
            At <strong>Easy-Buy</strong>, our mission is to eliminate the complexity of online shopping. 
            We believe that finding what you need should be a breeze, not a chore. We provide 
            a curated selection of products backed by world-class customer support.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <p className="text-gray-700 leading-relaxed">
            We aren&apos;t just another marketplace. We are a community-driven platform 
            focused on transparency and user experience. With Easy-Buy, what you 
            see is exactly what you get.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Curated high-quality products</li>
            <li>Fast & reliable delivery</li>
            <li>Secure and hassle-free payments</li>
          </ul>
        </div>
      </div>

      {/* Core Values */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-3xl shadow-md hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300 bg-white">
              <div className="text-5xl mb-5">{value.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <footer className="mt-20 text-center bg-gray-900 text-white p-16 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-cyan-600 opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions?</h2>
          <p className="mb-8 text-gray-100 opacity-80 text-lg">Our support team is available 24/7 to help you.</p>
          <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl transition-all">
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
