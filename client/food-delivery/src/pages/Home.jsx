import React from "react";
import OrderNowBtn from "../components/OrderNowBtn";
import { IoIosPlay } from "react-icons/io";
import MenuCards from "../components/MenuCards";
import InfoCard from "../components/InfoCard";
import cardItems from "../Data/cardItems";

const Home = () => {
  return (
    <div>
      <div className=" flex flex-col items-center md:grid grid-cols-3 mt-5 mb-40">
        <div className="col-span-2 ">
          <div className="flex items-center justify-between rounded-[31.5px] h-[63px] w-[270px] bg-[#F5DDC4] p-2 ">
            <span className="text-[#F48E28] text-[18px] font-medium ml-6">
              Bike Delivery
            </span>
            <img
              src="images/food-delivery.png"
              className="w-[49px] h-[43px] rounded-full"
            />
          </div>

          <div className="mt-10 w-[375px] md:w-[575px] h-[350px] md:h-[500px] ">
            <h1 className="text-6xl md:text-8xl font-bold">The Fastest</h1>
            <h1 className="text-6xl md:text-8xl font-bold">Delivery</h1>
            <h1 className="text-6xl md:text-8xl font-bold">
              In <span className="text-[#F48E28]">Your City</span>
            </h1>

            <h3 className="text-base md:text-lg font-medium mt-[48px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
              sed proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit
              sed tortor etiam volutpat ipsum.{" "}
            </h3>
          </div>

          <div className="flex md:flex-row flex-col items-center gap-7 mb-10 md:mb-0">
            <OrderNowBtn />
            <div className="w-[88px] h-[88px] bg-white flex justify-center items-center rounded-full drop-shadow-xl cursor-pointer hover:translate-y-[-5px] text-[#F48E28] transition-all duration-500 hover:text-black">
              <IoIosPlay className="text-6xl ml-2" />
            </div>
            <h1 className="font-bold text-2xl cursor-pointer">ORDER PROCESS</h1>
          </div>
        </div>

        <div className="flex">
          <div className="md:ml-auto w-[345px] md:w-[445px] h-[500px] md:h-[837px] rounded-3xl bg-gradient-to-b from-[#D9D9D9] from-[-18.38%] to-[rgba(217,217,217,0.00)] to-[89.51%] "></div>

          <div className="absolute left-10 md:left-auto md:ml-0 grid grid-cols-2 gap-4">
            {cardItems.map((item, index) => (
              <MenuCards
                image={item.image}
                name={item.name}
                addOn={item.addOn}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>

      <InfoCard />
    </div>
  );
};

export default Home;
