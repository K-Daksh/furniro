import React, { useState } from "react";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";
const FilterBar = ({
  totalItems,
  currentView,
  setCurrentView,
  sortBy,
  setSortBy,
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  onFilterClick,
  onAddProduct,
}) => {
  const startCount = (currentPage - 1) * itemsPerPage + 1;
  const endCount = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-4 md:py-0 bg-[#F9F1E7] shadow-sm gap-4 md:gap-0 md:min-w-[1000px]">
      {/* Left Controls - stack on smaller screens */}
      <div className="flex flex-row md:flex-row justify-center items-center md:items-center gap-4 md:gap-6 w-full md:w-auto">
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-[#B88E2F]"
          onClick={onFilterClick}
        >
          <i className="ri-equalizer-line"></i>
          <span>Filter</span>
        </div>

        {/* View buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentView("grid")}
            className={`p-2 ${
              currentView === "grid" ? "text-primary" : "text-gray-500"
            }`}
          >
            <FiGrid />
          </button>
          <button
            onClick={() => setCurrentView("list")}
            className={`${
              currentView === "list" ? "text-primary" : "text-gray-500"
            }`}
          >
            <FiList />
          </button>
        </div>

        <div className="border-l h-6 hidden md:block" />

        {/* Results info */}
        <span className="text-sm text-gray-600 font-semibold whitespace-nowrap">
          Showing {startCount}-{endCount} of {totalItems} results
        </span>
      </div>

      {/* Center Button - move below left controls on smaller screens */}
      <div className="w-full md:w-auto flex justify-end md:justify-center md:py-5">
        <button
          onClick={onAddProduct}
          className="h-[48px] w-full md:w-[202px] bg-white text-[#B88E2F] font-medium cursor-pointer hover:bg-[#B88E2F] hover:text-white transition-colors"
        >
          Add Product
        </button>
      </div>

      {/* Right Controls - Show/Sort, stack on smaller */}
      <div className="flex flex-row md:flex-row justify-around items-center md:items-center gap-4 w-full md:w-auto">
        <div className="flex flex-col sm:flex-row  items-center gap-2">
          <span>Show</span>
          <select
            className="p-3.5 rounded-sm text-gray-500 text-sm bg-white outline-none"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row  items-center gap-2">
          <span>Sort by</span>
          <select
            className="p-3.5 rounded-sm text-gray-500 text-sm bg-white outline-none"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="name_asc">Name Asc</option>
            <option value="name_desc">Name Desc</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="brand_ascending">Brand Name Asc</option>
            <option value="brand_descending">Brand Name Desc</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
