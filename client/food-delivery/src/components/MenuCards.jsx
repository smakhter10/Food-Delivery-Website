import React from "react";

const MenuCards = ({ image, name, addOn, price }) => {
  return (
    <div className="flex justify-center mt-[134px]">
      <img
        src={image}
        className="w-[100px] md:w-[278px] h-[80px] md:h-[254px] absolute md:translate-y-[-100px] translate-y-[-20px]"
      />
      <div className="w-[138px] md:w-[258px] h-[137px] md:h-[275px] rounded-[30px] bg-[#FFF] shadow-[0_0px_31px_0px_rgba(0,0,0,0.2)] flex flex-col justify-center items-center md:gap-2">
        <h1 className="text-base font-bold mt-12 md:mt-28">{name}</h1>
        <h3 className="text-xs font-medium">{addOn}</h3>
        <span className="text-sm font-semibold">{price}</span>
      </div>
    </div>
  );
};

export default MenuCards;