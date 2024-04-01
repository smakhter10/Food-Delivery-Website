import React from "react";
import { HiOutlineClock } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import InfoBar from "../components/InfoBar";

const InfoCard = () => {
  const clock = <HiOutlineClock />;
  const location = <IoLocationOutline />;
  const phone = <FiPhoneCall />;
  return (
    <div className="ml-20 w-[1560px] h-[218px] bg-[#FFF] shadow-[0_0_50px_0_rgba(0,0,0,0.05)] rounded-[50px] flex items-center justify-evenly">
      <InfoBar logo={clock} info="Today 10:00am - 10:00pm" tag="Working time" />
      <div className="w-px h-40 border-l-2"></div>
      <InfoBar
        logo={location}
        info="Washington, D.C., DC,USA"
        tag="Our Location"
      />
      <div className="w-px h-40 border-l-2"></div>
      <InfoBar logo={phone} info="+0123 456 7891" tag="Phone Number" />
    </div>
  );
};

export default InfoCard;
