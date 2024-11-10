import React from "react";

function Hero() {
  const items = [
    "قهوه گرم و قهوه سرد",
    "کیک",
    "نوشیدنی های سرد",
    "شیک",
    "دمی بار",
    "نوشیدنی های گرم",
    "فصلی",
    "تاپینگ"
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex items-center overflow-auto gap-4 w-11/12 h-24 border-r-2 border-l-2 rounded-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-white flex-shrink-0 border w-40 text-center py-2 rounded-md text-white"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;