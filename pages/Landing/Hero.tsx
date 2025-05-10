/** @format */

import Image from "next/image";
import React from "react";
import HeroIcon from "@/public/LandingIcons/HeroIcon.png";
import { ArrowDown2 } from "iconsax-react";
import menuma from "@/public/LandingIcons/ menuma.svg";
import iphonelaptop from "@/public/LandingIcons/iphonelaptop.svg";
import reqtangle from "@/public/LandingIcons/Rectangle.png";

function Hero() {
  return (
    <div id="hero" className=" w-full flex justify-between mt-24 h-fit">
      <div className=" w-full flex flex-col justify-between">
        <div className=" flex flex-col gap-24 items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className=" relative w-[91px] h-[58px] lg:w-[182px] lg:h-[110px] ">
              <Image src={menuma} fill alt="HeroIcon" />
            </div>
            <div className=" flex flex-col items-center gap-6">
              <h1 className=" text-lg lg:text-3xl font-semibold rounded-lg text-black">
                منوی دیجیتال و دسترسی آسان
              </h1>
              <div className=" relative w-[300px] h-[200px] lg:w-[700px] lg:h-[435px] ">
                <Image src={iphonelaptop} fill alt="HeroIcon" />
              </div>
            </div>
          </div>

          <div className=" relative bg-primary rounded-3xl w-[300px] lg:w-[1031px] flex flex-col gap-3 justify-center items-center h-[105px] lg:h-[227px] ">
            <h1 className="  text-lg lg:text-[45px] font-semibold rounded-lg text-white">
              منوی دیجیتال منوما
            </h1>
            <p className=" text-white text-xs lg:text-2xl">
              با امکان تغییرات دلخواه و ظاهری ساده و جذاب
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
