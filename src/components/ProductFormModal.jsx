import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const product = [
  // Moved from AddProductModal
  { image: "https://placehold.co/600x400", description: "Stylish cafe chair" },
  // ...Add more default images if needed
];

const ProductFormModal = ({ isOpen, onClose, onSuccess, productId = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    color: [],
    sizes: [],
    brandName: "",
    isNew: false,
    salePercentage: "",
  });
  const [isLoading, setIsLoading] = useState(productId ? true : false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (productId) {
      fetchProductData();
    }
  }, [productId]);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/furniture/${productId}`
      );
      const product = response.data;
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category,
        color: product.color || [],
        sizes: product.sizes || [],
        brandName: product.brandName,
        isNew: product.isNew || false,
        salePercentage: product.salePercentage || "",
      });
    } catch (error) {
      toast.error("Error fetching product data");
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "isNew" && checked) {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
          salePercentage: "",
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else if (name === "salePercentage") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        isNew: false,
      }));
    } else if (name === "color" || name === "sizes") {
      setFormData((prev) => ({
        ...prev,
        [name]: value.split(",").map((item) => item.trim()),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate sale percentage
    if (formData.salePercentage) {
      const percentage = Number(formData.salePercentage);
      if (percentage >= 99) {
        setError("Sale percentage must be less than 99%");
        toast.error("Sale percentage must be less than 99%", {
          position: "top-center",
          className: "text-center",
        });
        return;
      }
    }

    // Prevent both isNew and salePercentage being set
    if (formData.isNew && formData.salePercentage) {
      setError("Product cannot be both new and on sale");
      toast.error("Product cannot be both new and on sale", {
        position: "top-center",
        className: "text-center",
      });
      return;
    }

    setIsLoading(true);
    try {
      let response;
      const randomProduct = product[Math.floor(Math.random() * product.length)];

      if (productId) {
        // Update existing product
        response = await axios.put(
          `http://localhost:4000/furniture/${productId}`,
          formData
        );
        toast.success("Product updated successfully!", {
          position: "top-center",
          className: "text-center",
        });
      } else {
        // Create new product
        response = await axios.post("http://localhost:4000/furniture/create", {
          ...formData,
          image: randomProduct.image,
          description: randomProduct.description,
        });
        toast.success("Product added successfully!", {
          position: "top-center",
          className: "text-center",
        });
      }

      if (onSuccess) {
        onSuccess(response.data);
      }

      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        `Error ${productId ? "updating" : "adding"} product`;
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-center",
        className: "text-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000000bb] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-['Poppins']">
                {productId ? "Update Product" : "Add New Product"}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="text-red-500 text-2xl cursor-pointer"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Sale Percentage
                  </label>
                  <input
                    type="number"
                    name="salePercentage"
                    value={formData.salePercentage}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    disabled={formData.isNew}
                    max="98"
                    min="1"
                  />
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    name="isNew"
                    checked={formData.isNew}
                    onChange={handleChange}
                    className="mr-2"
                    disabled={formData.salePercentage !== ""}
                  />
                  <label className="text-sm font-medium">Mark as New</label>
                </div>
              </div>
            </div>

            {/* Full Width Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Colors (comma-separated)
                </label>
                <input
                  type="text"
                  name="color"
                  value={formData.color.join(", ")}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Red, Blue, Green"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Sizes (comma-separated)
                </label>
                <input
                  type="text"
                  name="sizes"
                  value={formData.sizes.join(", ")}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="S, M, L, XL"
                  required
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="bg-[#B88E2F] text-white px-4 py-2 rounded w-full"
              >
                {productId ? "Update Product" : "Add Product"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-200 px-4 py-2 rounded w-full"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductFormModal;
