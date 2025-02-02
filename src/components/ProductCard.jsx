import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const formatPrice = (price) => {
  return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const ProductCard = ({
  id,
  image,
  title,
  description,
  price,
  originalPrice,
  isNew,
  salePercentage,
  onUpdate,
  onDelete, // new prop for delete functionality
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  const handleUpdate = (e) => {
    e.stopPropagation();
    onUpdate(id);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  if (!originalPrice && salePercentage) {
    originalPrice = (price / (1 - salePercentage / 100)).toFixed(0);
  }

  return (
    <div
      onClick={handleClick}
      className="relative w-full max-w-[260px] mx-auto group"
    >
      {/* Hover Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-4">
        {/* Admin Actions */}
        <div className="flex gap-4">
          <button
            onClick={handleUpdate}
            className="bg-[#B88E2F] text-white p-3 rounded-full hover:bg-white hover:text-[#B88E2F] transition-colors duration-300 cursor-pointer"
          >
            <FaEdit size={20} />
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white p-3 rounded-full hover:bg-white hover:text-red-500 transition-colors duration-300 cursor-pointer"
          >
            <FaTrash size={20} />
          </button>
        </div>
      </div>

      <div className="relative h-[301px] w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* New/Sale badges */}
        {isNew && (
          <div className="absolute top-5 right-5 bg-[#2EC1AC] text-white rounded-full w-12 h-12 flex items-center justify-center font-medium">
            New
          </div>
        )}
        {salePercentage && (
          <div className="absolute top-5 right-5 bg-[#E97171] text-white rounded-full w-12 h-12 flex items-center justify-center font-medium">
            -{salePercentage}%
          </div>
        )}
      </div>

      <div className="p-4 bg-[#F4F5F7]">
        <h3 className="font-['Poppins'] text-xl font-semibold">{title}</h3>
        <p className="font-['Poppins'] text-sm text-gray-500 mt-1">
          {description}
        </p>
        <div className="flex items-center gap-3 mt-2">
          <span className="font-['Poppins'] text-lg font-semibold">
            Rp {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="font-['Poppins'] text-gray-400 text-xs line-through">
              Rp {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
