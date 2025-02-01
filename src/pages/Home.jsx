import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Banner from "./../components/Banner";
import Hero from "./../assets/hero.png";
import sample1 from "./../assets/sample1.png";
import sample2 from "./../assets/sample2.png";
import sample3 from "./../assets/sample3.png";
import ProductCard from "./../components/ProductCard";
import Slider from "./../components/Slider";
import ImageCollage from "./../components/ImageCollage";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      try {
        // Fetch featured products
        const response = await axios.get(
          "http://localhost:4000/furniture/featured",
          {
            params: { limit: 8 },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  useEffect(() => {
    // Create an array of image sources to preload
    const imagesToLoad = [
      Hero,
      sample1,
      sample2,
      sample3,
      ...products.map((product) => product.image),
    ];

    // Preload all images
    Promise.all(
      imagesToLoad.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    )
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [products]);

  return (
    <div className="bg-white min-h-screen w-full">
      {isLoading && <Spinner />}
      <Header />
      {/* Hero Section */}
      <div
        style={{
          background: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-4"
      >
        <div className="w-full md:w-1/2"></div>
        <div
          style={{ background: "#fff3e3" }}
          className="w-full md:w-[45%] flex flex-col items-start justify-center p-6 md:p-10 md:mr-[5%]"
        >
          <h4 className="font-semibold text-base md:text-lg">New Arrival</h4>
          <h1 className="text-4xl md:text-[8.3vh] font-['Poppins'] font-bold text-[#b88e2f]">
            Discover Our New Collection
          </h1>
          <h3 className="font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </h3>
          <button
            onClick={() => navigate("/shop")}
            className="px-15 py-5 text-base text-white font-semibold mt-10 cursor-pointer bg-[#b88e2f] hover:bg-[#b88f2ff5]"
          >
            BUY NOW
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-white px-4 md:px-23">
        {/* Browse Range Section */}
        <div className="w-full py-8 md:min-h-screen bg-white">
          <div className="text-center pt-15 pb-7">
            <h1 className="font-['Poppins'] text-3xl font-semibold">
              Browse The Range
            </h1>
            <h3 className="font-['Poppins'] text-sm font-medium text-gray-400 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-4">
              <div className="w-full md:w-[30%] flex flex-col items-center gap-4">
                <div
                  style={{
                    background: `url(${sample1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-full h-[300px] md:h-[400px] rounded-lg"
                />
                <h2 className="text-2xl font-semibold text-center">Dining</h2>
              </div>

              <div className="w-full md:w-[30%] flex flex-col items-center gap-4">
                <div
                  style={{
                    background: `url(${sample2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-full h-[300px] md:h-[400px] rounded-lg"
                />
                <h2 className="text-2xl font-semibold text-center">Living</h2>
              </div>

              <div className="w-full md:w-[30%] flex flex-col items-center gap-4">
                <div
                  style={{
                    background: `url(${sample3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-full h-[300px] md:h-[400px] rounded-lg"
                />
                <h2 className="text-2xl font-semibold text-center">Bedroom</h2>
              </div>
            </div>
          </div>
        </div>
        {/* This is the Our Products section */}
        <div className="w-full bg-white pt-5 pb-10"></div>
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-['Poppins'] font-bold">
            Our Products
          </h1>
        </div>
        <div className="w-full bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                image={product.image}
                title={product.name}
                description={product.description}
                price={product.price}
                originalPrice={product.originalPrice}
                isNew={product.isNew}
                salePercentage={product.salePercentage}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button
            onClick={() => navigate("/shop")}
            className="text-[#b88e2f] font-semibold px-12 py-2 bg-white border-2 border-[#b88e2f] my-10 hover:bg-[#b88e2f] hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Show More
          </button>
        </div>
      </div>

      {/* <div className="h-[1.5px] w-full bg-gray-200"></div> */}
      <div className="w-full bg-white">
        <Slider />
      </div>

      {/* Replace the old setup sharing section with the new component */}
      <ImageCollage />
      <div className="h-[1.5px] w-full bg-gray-200 my-10"></div>

      <Footer />
    </div>
  );
};

export default Home;
