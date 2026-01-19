import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-base-100 py-24 px-4 mt-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-base-content/70 text-lg">
            Get in touch with our team for support, inquiries, or partnerships.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Contact Info */}
          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Reach us directly
              </h2>
              <p className="text-base-content/70 max-w-md">
                We’re here to help. Choose the most convenient way to contact us
                and our team will respond promptly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-base-200 border border-base-300">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-base-content/70">
                    support@easybuy.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-base-200 border border-base-300">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-base-content/70">
                    +880 1234 567 890
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-base-200 border border-base-300">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Office</p>
                  <p className="text-base-content/70">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="border border-base-300 bg-base-200 rounded-xl p-10">
            <h2 className="text-2xl font-semibold mb-6">
              Send us a message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full min-h-[140px]"
                  placeholder="Write your message..."
                />
              </div>

              <button className="btn btn-primary w-full">
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
