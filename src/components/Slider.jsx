import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaChevronRight } from "react-icons/fa";

const sliderData = [
  {
    id: 1,
    number: "01",
    category: "Bed Room",
    title: "Inner Peace",
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bnoOefMLqBYsuHqkXNnjW9JI7q6sGB6zvpNOWwOe2Lym4hPOMgfdrtXM9jbcrBjcIO-gQsFygJAQD9QhA8e5dKUie8qmtG1w-n2E29t-lKq968T4kCfslZC3UDmWFm0KmOlNnIdzfDwVZ818fFk8oS8rCMB3XuroclgjVH6te1~ti2jBjT5x7SRrWf3gUwLPVN2bsbLGIfTXciPrW6XcgZcl8Vj-kGZQwTCzsjoSPeoV-dtDxPAXJWwv86uf5TC9qUFFydTgPelMNw6RT~~LB6WFD~RHzWMLeZFPUS5COPeJruIjGqFplmpnKIKlYYE6mzJSKzCNWp-by-Ls2rNyrw__",
  },
  {
    id: 2,
    number: "02",
    category: "Living Room",
    title: "Modern Life",
    image:
      "https://s3-alpha-sig.figma.com/img/7843/84ee/37569bf147f74d2ca44831a4a6ef3ee5?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jYkXYOA5gKlLbz-6Ptr3YMD0FCF8oHj7BYpAfaCqoD7LpiQ7dP64GH0DJdlWV7XvaujbLsrvsjy3zP~~yTTpR~uVJ-sy~e4Za-F6mm1jihNPxCH2Iuz9N7ypy79rTpRQs-SIlGd3iKlU501E9nCpmw5x3rnXJHlbJE9SHbsIcFiMsDGhalvGD~piOqY7xfhKUN-HpM2qqGTtPxPJt5Xolk6SOG~i1nvRUo13I9eBIGlCfCOVYVqqwLoOAXQbnWvEg2jxrxNCn5fw82QZLR0M4ajkBtFNJ6hZ6y4lnXHXU70k9pu9TIm3xt5R-f6F51sjezRd0OJcls8oVyFLZt8aQw__",
  },
  {
    id: 3,
    number: "03",
    category: "Kitchen",
    title: "Culinary",
    image:
      "https://s3-alpha-sig.figma.com/img/acc4/8179/d1b18b523420e79dda1e92951ecde49b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uVuCSQqfP9SBjxjM6Bf0zeWnjR8zcJeFBGmRKTBAOQ3uS9wwoJAKS7F99imptKWqzul056zeZIb4NUMcr6AOaKLpdeCVqRK7x7V87bnMsfslAJihU3ooHMvMR-4vvG3ZVJbFJMfv9ofnt6jamUqtA7IHjbjkqv8U4-qYFJv-MqJADibm9rsKEpKhrxy~kqIeaaYe2CmOU4xdIZ2se1X~IZVuPIiOYVB3LxPhPdFJnQaM~Up0XAJXI~UPtBAU~mCAfiPNOZYqmujL7NQMOOUlhwli2NHt-vKcl1S3aslYE4k3IryF9LXYGAXphakqmc5DMH17cnNkH42gNMWBq957ew__",
  },
  {
    id: 4,
    number: "04",
    category: "Study Room",
    title: "Focus Zone",
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bnoOefMLqBYsuHqkXNnjW9JI7q6sGB6zvpNOWwOe2Lym4hPOMgfdrtXM9jbcrBjcIO-gQsFygJAQD9QhA8e5dKUie8qmtG1w-n2E29t-lKq968T4kCfslZC3UDmWFm0KmOlNnIdzfDwVZ818fFk8oS8rCMB3XuroclgjVH6te1~ti2jBjT5x7SRrWf3gUwLPVN2bsbLGIfTXciPrW6XcgZcl8Vj-kGZQwTCzsjoSPeoV-dtDxPAXJWwv86uf5TC9qUFFydTgPelMNw6RT~~LB6WFD~RHzWMLeZFPUS5COPeJruIjGqFplmpnKIKlYYE6mzJSKzCNWp-by-Ls2rNyrw__",
  },
  {
    id: 5,
    number: "05",
    category: "Dining Room",
    title: "Family Time",
    image:
      "https://s3-alpha-sig.figma.com/img/7065/5e8b/25a06a33769af9bf5fe8f8ed81ce75d8?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mDo1uL09UPybs1gsp8dgqsGQD95opLYn3mAHXhzFgiybrfm5XSl6TAh~3i7yyzMfu~SFzzK5AzxucLQm8spF0n-B-BqTNiCo1SRpcP-pZYgwPQCbFj9CU1dUG9-pxH92Zp78cZW5Jtbi~8A~YmC~9vfoTwXb5BOOEN00H6IG0W-WNBObCPKYuDk9OEqly7lMAwxX2PjR-I5D7tftJNSTFVVmTagLG6ykk8~9hCCkFjBJFQpiAT9-tt9YTIU822PmKcIkdV2KHxGt8UT0xVBMrDxkAP3pGWKovKfK7R2RFY7P4k0IpMs~FA1wZO-MKzz7ChqIWyhCIxBlOKuf75pXXA__",
  },
  // Add more items as needed
];

const Slider = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentSlide = useRef(null);

  const handleNext = () => {
    if (isAnimating) return;
    const wrapper = sliderRef.current;
    const currentElement = currentSlide.current;
    if (!wrapper) return;

    setIsAnimating(true);
    // Calculate width based on container width and padding
    const containerWidth = currentElement.parentElement.offsetWidth;
    const totalSlides = sliderData.length;
    const currentX = gsap.getProperty(wrapper, "x") || 0;

    if (activeIndex === totalSlides - 1) {
      gsap.to(wrapper, {
        x: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setActiveIndex(0);
          setIsAnimating(false);
        },
      });
    } else {
      gsap.to(wrapper, {
        x: currentX - containerWidth,
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          setActiveIndex((prev) => prev + 1);
          setIsAnimating(false);
        },
      });
    }
  };

  return (
    <div className="h-screen w-full flex bg-[#fcf8f3]">
      {/* Left section */}
      <div className="w-[35%] h-full hidden sm:flex flex-col justify-center items-center">
        <div className="p-8">
          <h1 className="text-4xl font-bold font-['Poppins']">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-gray-500 text-sm font-base font-['Poppins'] py-5">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button className="text-white font-semibold px-8 py-3 bg-[#b88e2f]">
            Expolore More
          </button>
        </div>
      </div>

      {/* Slider section */}
      <div className="w-[100%] sm:w-[65%] h-full overflow-x-hidden overflow-y-hidden relative">
        <div ref={sliderRef} className="flex flex-nowrap h-full">
          {sliderData.map((item, index) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 flex mt-8 justify-center h-full py-5  sm:p-5 items-start"
            >
              <img
                className="object-cover"
                ref={currentSlide}
                style={{
                  height: activeIndex === index ? "90%" : "70%",
                  transition: "height 0.3s ease-in-out",
                  //   delay: "0.5s",
                }}
                src={item.image}
                alt="room"
              />

              <div
                className={`${
                  activeIndex === index ? "flex" : "hidden"
                } w-auto h-full flex-col items-end justify-end pb-18 transition-all  duration-300`}
              >
                <div className="absolute left-10 z-50 flex flex-row">
                  <div className="bg-[#ffffffaf] p-8 h-[100px] w-[250px]">
                    <div className="flex flex-row items-center gap-2">
                      <h1 className="font-['Poppins'] text-sm">
                        {item.number}
                      </h1>
                      <div className="h-[1.5px] w-[20px] bg-gray-400" />
                      <h1 className="font-['Poppins'] text-sm">
                        {item.category}
                      </h1>
                    </div>
                    <h1 className="text-2xl font-semibold font-['Poppins'] text-gray-500">
                      {item.title}
                    </h1>
                  </div>
                  <div className="h-[50px] w-[50px] bg-[#b88e2f] flex items-center justify-center cursor-pointer self-end">
                    <FaChevronRight className="text-xl text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator using the original sliderData */}
        <div className="absolute bottom-5 mb:bottom-15 sm:bottom-15 right-1/4 sm:right-1/4 md:right-1/8 -translate-x-1/2 flex gap-3">
          {sliderData.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#B88E2F] ring-1 ring-[#B88E2F] ring-offset-2"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 flex bg-white p-5 rounded-full cursor-pointer z-50"
        >
          <FaChevronRight className="text-xl text-[#b88e2f] hover:text-[#ffd164]" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
