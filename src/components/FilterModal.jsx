import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner"; // Make sure you have this component

const FilterModal = ({ isOpen, onClose, onApplyFilters, initialFilters }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filterOptions, setFilterOptions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      fetchFilterOptions();
    }
  }, [isOpen]);

  useEffect(() => {
    if (initialFilters) {
      setMinPrice(initialFilters.priceRange?.min || "");
      setMaxPrice(initialFilters.priceRange?.max || "");
      setSelectedBrands(initialFilters.brands || []);
      setSelectedCategories(initialFilters.categories || []);
    }
  }, [initialFilters]);

  const fetchFilterOptions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:4000/furniture/filter-options"
      );
      console.log(response);
      setFilterOptions(response.data);
    } catch (error) {
      console.error("Error fetching filter options:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyFilters = () => {
    const filters = {
      brands: selectedBrands,
      categories: selectedCategories,
    };

    // Only add price range if both values are valid numbers
    if (minPrice || maxPrice) {
      filters.priceRange = {};
      if (minPrice && !isNaN(parseInt(minPrice))) {
        filters.priceRange.min = parseInt(minPrice);
      }
      if (maxPrice && !isNaN(parseInt(maxPrice))) {
        filters.priceRange.max = parseInt(maxPrice);
      }
    }

    onApplyFilters(filters);
    onClose();
  };

  const handleClearFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setSelectedBrands([]);
    setSelectedCategories([]);
    onApplyFilters(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000000bb] z-50 flex flex-col items-center justify-between p-4 h-screen">
      <div className="bg-white h-auto p-6 rounded-lg w-full max-w-md flex flex-col justify-between">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner />
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-2xl mb-4 font-['Poppins']">Filters</h2>
              <button
                className="h-full flex flex-col items-center cursor-pointer"
                onClick={onClose}
              >
                <i className="ri-close-line text-red-500 ri-xl"></i>
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <h3 className="font-medium mb-2 font-['Poppins'] text-lg">
                Price Range
              </h3>
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="border p-2 w-full rounded"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="border p-2 w-full rounded"
                />
              </div>
            </div>

            {/* Brand Selection */}
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2 font-['Poppins']">
                Brands
              </h3>
              <div className="space-y-2 max-h-25 overflow-y-auto no-scrollbar bg-[#F9F1E7] p-2 rounded-lg">
                {filterOptions?.brands.map((brand) => (
                  <label key={brand} className="flex items-center bg-[#F9F1E7]">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedBrands([...selectedBrands, brand]);
                        } else {
                          setSelectedBrands(
                            selectedBrands.filter((b) => b !== brand)
                          );
                        }
                      }}
                      className="mr-2"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            {/* Category Selection */}
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2 font-['Poppins']">
                Categories
              </h3>
              <div className="space-y-2 max-h-25 overflow-y-auto no-scrollbar bg-[#F9F1E7] p-2 rounded-lg">
                {filterOptions?.categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center bg-[#F9F1E7]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCategories([
                            ...selectedCategories,
                            category,
                          ]);
                        } else {
                          setSelectedCategories(
                            selectedCategories.filter((c) => c !== category)
                          );
                        }
                      }}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-col md:flex-row">
              <button
                onClick={handleApplyFilters}
                className="bg-[#B88E2F] text-white px-4 py-2 rounded w-full"
              >
                Apply Filters
              </button>
              <button
                onClick={handleClearFilters}
                className="bg-gray-200 px-4 py-2 rounded w-full"
              >
                Clear
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FilterModal;
