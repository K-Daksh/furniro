import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import BackgroundOverlay from "../components/BackgroundOverlay";
import FilterBar from "../components/FilterBar";
import ProductCard from "../components/ProductCard"; // Changed from ProductGrid
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import FilterModal from "../components/FilterModal";
import AddProductModal from "../components/AddProductModal";
import { toast } from "react-toastify";
import ProductFormModal from "../components/ProductFormModal";

const Shop = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const [products, setProducts] = useState([]);
  const [currentView, setCurrentView] = useState("grid");
  const [sortBy, setSortBy] = useState("default");
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState(null);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isProductFormOpen, setIsProductFormOpen] = useState(false);

  // Separate useEffect for initial load
  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array for initial load

  // Separate useEffect for filter/pagination changes
  useEffect(() => {
    if (activeFilters !== undefined) {
      // Only run if activeFilters has been set
      fetchProducts(activeFilters);
    }
  }, [currentPage, sortBy, itemsPerPage, activeFilters]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const fetchProducts = async (filtersParam = null) => {
    setIsLoading(true);
    try {
      const params = {
        page: currentPage,
        limit: itemsPerPage,
        sort: sortBy,
      };

      // Only add filters if they exist
      if (filtersParam) {
        params.priceRange = filtersParam.priceRange
          ? JSON.stringify(filtersParam.priceRange)
          : null;
        params.brands = filtersParam.brands
          ? JSON.stringify(filtersParam.brands)
          : null;
        params.categories = filtersParam.categories
          ? JSON.stringify(filtersParam.categories)
          : null;
      }

      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.get(`${backendUrl}/furniture/all`, {
        params,
      });

      const data = response.data;
      setProducts(data.furniture);
      setTotalItems(data.total);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Add this helper function to calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Add this helper function to generate page numbers array
  const getPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  };

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters);
    fetchProducts(filters);
  };

  const handleProductAdded = (newProduct) => {
    // Refresh the products list
    fetchProducts(activeFilters);
  };

  const handleUpdateProduct = (id) => {
    console.log("Update product with ID:", id);
    setSelectedProductId(id);
    setIsProductFormOpen(true);
  };

  const handleProductSaved = () => {
    fetchProducts(activeFilters);
    setSelectedProductId(null);
  };

  const handleDeleteProduct = async (id) => {
    toast.warn(
      <div className="flex flex-col items-center">
        <p className="font-semibold text-lg mb-2">Delete Product</p>
        <p className="mb-1">Are you sure you want to delete this product?</p>
        <p className="text-sm text-gray-500 mb-4">
          This action cannot be undone.
        </p>
        <div className="flex justify-center gap-3 w-full">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 min-w-[100px]"
            onClick={() => toast.dismiss()}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 min-w-[100px]"
            onClick={async () => {
              toast.dismiss();
              setIsLoading(true);
              try {
                const backendUrl = import.meta.env.VITE_BACKEND_URL;
                await axios.delete(`${backendUrl}/furniture/${id}`);
                toast.success("Product deleted successfully", {
                  className: "text-center",
                });
                fetchProducts(activeFilters);
              } catch (error) {
                const errorMessage =
                  error.response?.data?.message || "Error deleting product";
                toast.error(errorMessage, {
                  className: "text-center",
                });
              } finally {
                setIsLoading(false);
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: true,
        className: "w-96",
      }
    );
  };

  return (
    <div className="min-h-screen">
      {isLoading && <Spinner />}
      <Header />
      <BackgroundOverlay
        imageUrl="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UTpJJv~2rXcCh54Z~6VeiUoNg7H3bjILOQriitB9LYF~qkf-qYLcoO5Fon9Yyo75HKkz8B0rCuTkcAnYm8j7-uqJGHMoLtbEoytlJcbXuWiPILXhCrMpYRap0u~to6kNTbllpyvTI81B2eeuhU~tmEDDmqw97qv0bUmm2EMJVBYgY~y43q5kAobR2leZ1qe9E~6I4WyJhA5Grf6tjKdq9B1ujX5~TMhj0FRYih7zubPOVvGwQRi4ONdlhhUWODRKSElXu1xAZqKwv9G5AMpA5W8W93euO-M1DDVCdppn0Ij-V5N~YR5oGvvapAJBZF23tOQrvq09U7hnCextjUfOlw__"
        title="Shop"
        pathnames={pathnames}
      />
      <FilterBar
        totalItems={totalItems}
        currentView={currentView}
        setCurrentView={setCurrentView}
        sortBy={sortBy}
        setSortBy={setSortBy}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        currentPage={currentPage}
        onFilterClick={() => setIsFilterModalOpen(true)}
        onAddProduct={() => setIsAddProductModalOpen(true)}
      />

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApplyFilters={handleApplyFilters}
      />

      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
        onProductAdded={handleProductAdded}
      />

      {/* Replace ProductGrid with responsive grid layout */}
      <div className="w-full bg-white p-16 md:px-23">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              title={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
              salePercentage={product.salePercentage}
              isNew={product.isNew}
              onUpdate={handleUpdateProduct}
              onDelete={handleDeleteProduct}
            />
          ))}
        </div>
      </div>

      {/* Updated Pagination */}
      <div className="flex justify-center items-center gap-2 my-8">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 rounded bg-[#faf3ea] cursor-pointer hover:bg-[#B88E2F] text-black hover:text-white"
          >
            Previous
          </button>
        )}

        {getPageNumbers().map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            className={`w-10 h-10 rounded-sm flex items-center justify-center
              ${
                pageNum === currentPage
                  ? "bg-[#B88E2F] text-white"
                  : "bg-[#faf3ea]"
              } cursor-pointer`}
          >
            {pageNum}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 rounded bg-[#faf3ea] cursor-pointer hover:bg-[#B88E2F] text-black hover:text-white"
          >
            Next
          </button>
        )}
      </div>

      <ProductFormModal
        isOpen={isProductFormOpen}
        onClose={() => {
          setIsProductFormOpen(false);
          setSelectedProductId(null);
        }}
        onSuccess={handleProductSaved}
        productId={selectedProductId}
      />

      <Banner />
      <Footer />
    </div>
  );
};

export default Shop;
