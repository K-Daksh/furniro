import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const product = [
  // First row products
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bnoOefMLqBYsuHqkXNnjW9JI7q6sGB6zvpNOWwOe2Lym4hPOMgfdrtXM9jbcrBjcIO-gQsFygJAQD9QhA8e5dKUie8qmtG1w-n2E29t-lKq968T4kCfslZC3UDmWFm0KmOlNnIdzfDwVZ818fFk8oS8rCMB3XuroclgjVH6te1~ti2jBjT5x7SRrWf3gUwLPVN2bsbLGIfTXciPrW6XcgZcl8Vj-kGZQwTCzsjoSPeoV-dtDxPAXJWwv86uf5TC9qUFFydTgPelMNw6RT~~LB6WFD~RHzWMLeZFPUS5COPeJruIjGqFplmpnKIKlYYE6mzJSKzCNWp-by-Ls2rNyrw__",
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "2,500,000",
    originalPrice: "3,500,000",
    isNew: true,
    salePercentage: 30,
  },
  {
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bnoOefMLqBYsuHqkXNnjW9JI7q6sGB6zvpNOWwOe2Lym4hPOMgfdrtXM9jbcrBjcIO-gQsFygJAQD9QhA8e5dKUie8qmtG1w-n2E29t-lKq968T4kCfslZC3UDmWFm0KmOlNnIdzfDwVZ818fFk8oS8rCMB3XuroclgjVH6te1~ti2jBjT5x7SRrWf3gUwLPVN2bsbLGIfTXciPrW6XcgZcl8Vj-kGZQwTCzsjoSPeoV-dtDxPAXJWwv86uf5TC9qUFFydTgPelMNw6RT~~LB6WFD~RHzWMLeZFPUS5COPeJruIjGqFplmpnKIKlYYE6mzJSKzCNWp-by-Ls2rNyrw__",
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "2,500,000",
  },
  {
    id: 3,
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bnoOefMLqBYsuHqkXNnjW9JI7q6sGB6zvpNOWwOe2Lym4hPOMgfdrtXM9jbcrBjcIO-gQsFygJAQD9QhA8e5dKUie8qmtG1w-n2E29t-lKq968T4kCfslZC3UDmWFm0KmOlNnIdzfDwVZ818fFk8oS8rCMB3XuroclgjVH6te1~ti2jBjT5x7SRrWf3gUwLPVN2bsbLGIfTXciPrW6XcgZcl8Vj-kGZQwTCzsjoSPeoV-dtDxPAXJWwv86uf5TC9qUFFydTgPelMNw6RT~~LB6WFD~RHzWMLeZFPUS5COPeJruIjGqFplmpnKIKlYYE6mzJSKzCNWp-by-Ls2rNyrw__",
    title: "Lolito",
    description: "Luxury big sofa",
    price: "7,000,000",
    originalPrice: "14,000,000",
    salePercentage: 50,
  },
  {
    id: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bnoOefMLqBYsuHqkXNnjW9JI7q6sGB6zvpNOWwOe2Lym4hPOMgfdrtXM9jbcrBjcIO-gQsFygJAQD9QhA8e5dKUie8qmtG1w-n2E29t-lKq968T4kCfslZC3UDmWFm0KmOlNnIdzfDwVZ818fFk8oS8rCMB3XuroclgjVH6te1~ti2jBjT5x7SRrWf3gUwLPVN2bsbLGIfTXciPrW6XcgZcl8Vj-kGZQwTCzsjoSPeoV-dtDxPAXJWwv86uf5TC9qUFFydTgPelMNw6RT~~LB6WFD~RHzWMLeZFPUS5COPeJruIjGqFplmpnKIKlYYE6mzJSKzCNWp-by-Ls2rNyrw__",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "500,000",
    isNew: true,
  },
  {
    id: 5,
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bnoOefMLqBYsuHqkXNnjW9JI7q6sGB6zvpNOWwOe2Lym4hPOMgfdrtXM9jbcrBjcIO-gQsFygJAQD9QhA8e5dKUie8qmtG1w-n2E29t-lKq968T4kCfslZC3UDmWFm0KmOlNnIdzfDwVZ818fFk8oS8rCMB3XuroclgjVH6te1~ti2jBjT5x7SRrWf3gUwLPVN2bsbLGIfTXciPrW6XcgZcl8Vj-kGZQwTCzsjoSPeoV-dtDxPAXJWwv86uf5TC9qUFFydTgPelMNw6RT~~LB6WFD~RHzWMLeZFPUS5COPeJruIjGqFplmpnKIKlYYE6mzJSKzCNWp-by-Ls2rNyrw__",
    title: "Grifo",
    description: "Ergonomic office chair",
    price: "1,200,000",
    originalPrice: "2,000,000",
    salePercentage: 40,
  },
  {
    id: 6,
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bnoOefMLqBYsuHqkXNnjW9JI7q6sGB6zvpNOWwOe2Lym4hPOMgfdrtXM9jbcrBjcIO-gQsFygJAQD9QhA8e5dKUie8qmtG1w-n2E29t-lKq968T4kCfslZC3UDmWFm0KmOlNnIdzfDwVZ818fFk8oS8rCMB3XuroclgjVH6te1~ti2jBjT5x7SRrWf3gUwLPVN2bsbLGIfTXciPrW6XcgZcl8Vj-kGZQwTCzsjoSPeoV-dtDxPAXJWwv86uf5TC9qUFFydTgPelMNw6RT~~LB6WFD~RHzWMLeZFPUS5COPeJruIjGqFplmpnKIKlYYE6mzJSKzCNWp-by-Ls2rNyrw__",
    title: "Muggo",
    description: "Small mug",
    price: "150,000",
    originalPrice: "200,000",
    salePercentage: 25,
  },
  {
    id: 7,
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bnoOefMLqBYsuHqkXNnjW9JI7q6sGB6zvpNOWwOe2Lym4hPOMgfdrtXM9jbcrBjcIO-gQsFygJAQD9QhA8e5dKUie8qmtG1w-n2E29t-lKq968T4kCfslZC3UDmWFm0KmOlNnIdzfDwVZ818fFk8oS8rCMB3XuroclgjVH6te1~ti2jBjT5x7SRrWf3gUwLPVN2bsbLGIfTXciPrW6XcgZcl8Vj-kGZQwTCzsjoSPeoV-dtDxPAXJWwv86uf5TC9qUFFydTgPelMNw6RT~~LB6WFD~RHzWMLeZFPUS5COPeJruIjGqFplmpnKIKlYYE6mzJSKzCNWp-by-Ls2rNyrw__",
    title: "Pingky",
    description: "Cute pink mug",
    price: "200,000",
    originalPrice: "250,000",
    salePercentage: 20,
  },
  {
    id: 8,
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bnoOefMLqBYsuHqkXNnjW9JI7q6sGB6zvpNOWwOe2Lym4hPOMgfdrtXM9jbcrBjcIO-gQsFygJAQD9QhA8e5dKUie8qmtG1w-n2E29t-lKq968T4kCfslZC3UDmWFm0KmOlNnIdzfDwVZ818fFk8oS8rCMB3XuroclgjVH6te1~ti2jBjT5x7SRrWf3gUwLPVN2bsbLGIfTXciPrW6XcgZcl8Vj-kGZQwTCzsjoSPeoV-dtDxPAXJWwv86uf5TC9qUFFydTgPelMNw6RT~~LB6WFD~RHzWMLeZFPUS5COPeJruIjGqFplmpnKIKlYYE6mzJSKzCNWp-by-Ls2rNyrw__",
    title: "Potty",
    description: "Small plant pot",
    price: "300,000",
    originalPrice: "400,000",
    salePercentage: 25,
  },
];

const AddProductModal = ({ isOpen, onClose, onProductAdded }) => {
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate sale percentage
    if (formData.salePercentage) {
      const percentage = Number(formData.salePercentage);
      if (percentage >= 99) {
        setError("Sale percentage must be less than 99%");
        toast.error("Sale percentage must be less than 99%");
        return;
      }
    }

    // Prevent both isNew and salePercentage being set
    if (formData.isNew && formData.salePercentage) {
      setError("Product cannot be both new and on sale");
      toast.error("Product cannot be both new and on sale");
      return;
    }

    setIsLoading(true);
    try {
      // Add default values for removed fields
      const randomIndex = Math.floor(Math.random() * 8);
      console.log(randomIndex);
      const productData = {
        ...formData,
        image: product[randomIndex].image, // Default image
        description: product[randomIndex].description,
        additionalImages: [
          product[0].image,
          product[1].image,
          product[2].image,
          product[3].image,
          product[4].image,
          product[5].image,
          product[6].image,
          product[7].image,
        ], // New field for additional images
      };
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(
        `${backendUrl}/furniture/create`,
        productData
      );

      toast.success("Product added successfully!");

      // Reset form
      setFormData({
        name: "",
        price: "",
        category: "",
        color: [],
        sizes: [],
        brandName: "",
        isNew: false,
        salePercentage: "",
      });

      // Notify parent component to refresh the product list
      if (onProductAdded) {
        onProductAdded(response.data);
      }

      // Close modal after a short delay to show the success message
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message || "Error adding product";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Clear salePercentage if marking as new
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
      // Clear isNew if setting sale percentage
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
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-['Poppins']">Add New Product</h2>
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
                Add Product
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

export default AddProductModal;
