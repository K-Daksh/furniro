import React from "react";

const BackgroundOverlay = ({ imageUrl, title, pathnames }) => {
  return (
    <div className="relative h-[40vh] w-full">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[2.5px]"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      />
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white opacity-40" />
      {/* Content Overlay */}
      <div className="relative flex flex-col items-center justify-center h-full text-black font-['Poppins']">
        <h1 className="text-4xl font-medium mb-2">{title}</h1>
        <div className="text-sm opacity-90">
          Home
          {pathnames.map((name, index) => (
            <span key={index}> &gt; {name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundOverlay;
