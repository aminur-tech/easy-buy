"use client";

import { createProduct } from "@/actions/server/products";
import React, { useState } from "react";
import {
  PackagePlus,
  DollarSign,
  Tag,
  Image as ImageIcon,
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const AddProducts: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await createProduct({
        ...form,
        price: Number(form.price),
      });

      if (res.success) {
        setSuccess(res.message);
        setForm({
          name: "",
          price: "",
          category: "",
          image: "",
          description: "",
        });
      } else {
        setError(res.message || "Something went wrong");
      }
    } catch {
      setError("Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-primary rounded-2xl shadow-lg">
            <PackagePlus className="w-8 h-8 text-primary-content" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-base-content">
              Add New Product
            </h1>
            <p className="text-base-content/70">
              List a new item in the EasyBuy marketplace
            </p>
          </div>
        </div>

        {/* Alerts */}
        {success && (
          <div className="mb-6 flex items-center gap-3 p-4 bg-success/10 text-success border border-success/20 rounded-2xl">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">{success}</span>
          </div>
        )}

        {error && (
          <div className="mb-6 flex items-center gap-3 p-4 bg-error/10 text-error border border-error/20 rounded-2xl">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">{error}</span>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-base-100 border border-base-300 rounded-[2rem] p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-base-content/80 ml-1">
                Product Name
              </label>
              <div className="relative group">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40 group-focus-within:text-primary" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Wireless Headphones"
                  className="w-full pl-12 pr-4 py-3 bg-base-200 border border-base-300 rounded-xl
                  focus:bg-base-100 focus:ring-2 focus:ring-primary/30 focus:border-primary
                  outline-none transition-all"
                />
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-base-content/80 ml-1">
                Price
              </label>
              <div className="relative group">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40 group-focus-within:text-primary" />
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  required
                  placeholder="0.00"
                  className="w-full pl-12 pr-4 py-3 bg-base-200 border border-base-300 rounded-xl
                  focus:bg-base-100 focus:ring-2 focus:ring-primary/30 focus:border-primary
                  outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-base-content/80 ml-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              placeholder="Electronics"
              className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl
              focus:bg-base-100 focus:ring-2 focus:ring-primary/30 focus:border-primary
              outline-none transition-all"
            />
          </div>

          {/* Image */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-base-content/80 ml-1">
              Image URL
            </label>
            <div className="relative group">
              <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40 group-focus-within:text-primary" />
              <input
                type="text"
                name="image"
                value={form.image}
                onChange={handleChange}
                required
                placeholder="https://image.url"
                className="w-full pl-12 pr-4 py-3 bg-base-200 border border-base-300 rounded-xl
                focus:bg-base-100 focus:ring-2 focus:ring-primary/30 focus:border-primary
                outline-none transition-all"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-base-content/80 ml-1">
              Description
            </label>
            <div className="relative group">
              <FileText className="absolute left-4 top-4 w-5 h-5 text-base-content/40 group-focus-within:text-primary" />
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder="Product details..."
                className="w-full pl-12 pr-4 py-3 bg-base-200 border border-base-300 rounded-xl
                focus:bg-base-100 focus:ring-2 focus:ring-primary/30 focus:border-primary
                outline-none transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full btn btn-primary rounded-2xl py-4 text-lg font-bold flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              "Publish Product"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
