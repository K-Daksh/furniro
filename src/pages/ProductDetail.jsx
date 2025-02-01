// ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import BackgroundOverlay from "../components/BackgroundOverlay";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:4000/furniture/${id}`
        );
        setProduct(response.data);
        setSelectedSize(response.data.sizes[0]);
        setSelectedColor(response.data.color[0]);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (isLoading || !product) return <Spinner />;

  // Split images into array including additional images
  const images = [product.image, ...(product.additionalImages || [])];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-[#faf3ea] px-16 py-4">
        <div className="text-sm flex flex-row gap-4">
          <h1>Home</h1>
          <h1>{`>`}</h1>
          <h1>Shop</h1>
          <h1>{`>`}</h1>
          <h1>|</h1>
          <span className="text-black">{product.name}</span>
        </div>
      </div>
      <div className="px-16 py-8 flex gap-16">
        <div
          style={{
            WebkitScrollSnapType: "y mandatory",
          }}
          className="w-24 h-[400px] overflow-y-scroll no-scrollbar flex flex-col gap-4"
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-[80px] h-[80px] object-cover cursor-pointer ${
                selectedImage === index ? "border-2 border-[#B88E2F]" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
        {/* Updated Main Image container and image styles */}
        <div className="w-[300px] h-[400px] flex items-center justify-center bg-white">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1 px-8">
          <h1 className="text-3xl font-['Poppins'] mb-1">{product.name}</h1>
          <p className="text-lg text-gray-400  mb-3">Rp {product.price}</p>

          {/* Rating */}
          <div></div>
          <div className="flex flex-row items-center gap-4 mb-6">
            <span className="flex flex-row">
              {[...Array(5)].map((_, index) => (
                <AiFillStar
                  key={index}
                  className={
                    index < product.ratings
                      ? "text-yellow-400"
                      : "text-[#FCF8F3]"
                  }
                  size={18}
                />
              ))}
            </span>
            <span className="text-gray-400 text-sm">|</span>

            <span className="text-gray-400 text-sm "> 4 Customers Reviews</span>
          </div>

          <p className="text-gray-600 mb-5">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Options - Updated */}
          <div className="mb-6">
            <h3 className="font text-gray-400 mb-2">Size</h3>
            <div className="flex gap-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`h-[30px] w-[30px] text-xs rounded-md cursor-pointer ${
                    selectedSize === size
                      ? "bg-[#B88E2F] text-white"
                      : "bg-[#F9F1E7]"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options - Updated */}
          <div className="mb-6">
            <h3 className="font text-gray-400 mb-2">Color</h3>
            <div className="flex gap-4">
              {product.color.map((colorHex) => (
                <button
                  key={colorHex}
                  className={`h-[30px] w-[30px] rounded-full cursor-pointer`}
                  style={{
                    backgroundColor: colorHex,
                    border:
                      selectedColor === colorHex ? "2px solid #B88E2F" : "none",
                  }}
                  onClick={() => setSelectedColor(colorHex)}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                className="px-2 py-3 cursor-pointer"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <BiMinus />
              </button>
              <span className="px-2 py-3">{quantity}</span>
              <button
                className="px-2 py-3 cursor-pointer"
                onClick={() => setQuantity(quantity + 1)}
              >
                <BiPlus />
              </button>
            </div>
            <button className="px-8 py-3 border border-gray-600 text-black rounded-lg cursor-pointer">
              Add to cart
            </button>
            <button className="px-8 py-3 border border-black rounded-lg cursor-pointer">
              + Compare
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
