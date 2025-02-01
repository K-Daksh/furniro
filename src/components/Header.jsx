import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import logo from "./../assets/logo.png";
import heart from "./../assets/heart.png";
import cart from "./../assets/cart.png";
import search from "./../assets/search.png";
import accountAlert from "./../assets/accountAlert.png";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { text: "Home", icon: null, path: "/" },
    { text: "Shop", icon: null, path: "/shop" },
    { text: "About", icon: null, path: "/about" },
    { text: "Contact", icon: null, path: "/contact" },
    { text: "Account", icon: accountAlert, path: "/account" },
    { text: "Search", icon: search, path: "/search" },
    { text: "Favorites", icon: heart, path: "/favorites" },
    { text: "Cart", icon: cart, path: "/cart" },
  ];

  return (
    <div className="w-full">
      <header className="bg-white h-[13vh] w-full flex items-center justify-between px-[4vh]">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-[9vh] m-0 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h1
            className="text-[4.5vh] font-bold font-['Montserrat'] cursor-pointer"
            onClick={() => navigate("/")}
          >
            Furniro
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[8.8vh]">
          <h3
            className="font-['Poppins'] text-base md:text-[2.5vh] font-medium cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </h3>
          <h3
            className="font-['Poppins'] text-base md:text-[2.5vh] font-medium cursor-pointer"
            onClick={() => navigate("/shop")}
          >
            Shop
          </h3>
          <h3
            className="font-['Poppins'] text-base md:text-[2.5vh] font-medium cursor-pointer"
            onClick={() => navigate("/about")}
          >
            About
          </h3>
          <h3
            className="font-['Poppins'] text-base md:text-[2.5vh] font-medium cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Contact
          </h3>
        </div>
        <div className="hidden md:flex items-center gap-[6vh]">
          <img
            className="w-[24px] md:w-[4vh] cursor-pointer"
            src={accountAlert}
            alt="account"
            onClick={() => navigate("/account")}
          />
          <img
            className="w-[24px] md:w-[4vh] cursor-pointer"
            src={search}
            alt="search"
            onClick={() => navigate("/search")}
          />
          <img
            className="w-[24px] md:w-[4vh] cursor-pointer"
            src={heart}
            alt="heart"
            onClick={() => navigate("/favorites")}
          />
          <img
            className="w-[24px] md:w-[4vh] cursor-pointer"
            src={cart}
            alt="cart"
            onClick={() => navigate("/cart")}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsDrawerOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </header>

      {/* Mobile Drawer */}
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen}>
        <div className="flex flex-col gap-6">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-700 hover:text-[#B88E2F] cursor-pointer"
              onClick={() => navigate(item.path)}
            >
              {item.icon && (
                <img src={item.icon} alt={item.text} className="w-[24px]" />
              )}
              <span className="font-['Poppins'] text-lg font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
