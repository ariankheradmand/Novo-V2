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
    <div className="w-full flex items-center justify-center relative">
  <div className="flex items-center overflow-auto gap-4 w-11/12 h-24 rounded-lg relative z-10">
    {items.map((item, index) => (
      <button
        key={index}
        className="border-white flex-shrink-0 border w-40 text-center py-2 rounded-md text-white hover:bg-accent hover:text-black hover:border-black focus:bg-accent focus:text-black focus:border-black transition-all "
      >
        {item}
      </button>
    ))}
  </div>
  <div className="absolute left-0 top-0 h-full opacity-20 w-8 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
  <div className="absolute right-0 top-0 h-full opacity-20  w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
</div>
  );
}

export default Hero;
