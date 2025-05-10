/** @format */

import { Copyright } from "iconsax-react";
import React from "react";
import About from "../../../public/LandingIcons/About.png";
import call2 from "../../../public/LandingIcons/call2.png";
import call1 from "../../../public/LandingIcons/call1.png";

import Image from "next/image";
function LandingFooter() {
  return (
    <div className=" w-full text-white flex flex-col px-4 rounded-xl lg:rounded-none lg:px-0  gap-2  justify-center items-center ">
      <div className=" flex flex-col-reverse lg:flex-row justify-center bg-white  py-8 lg:py-0  rounded-xl lg:rounded-none lg:bg-[#E9E9E9] shadow-lg lg:shadow-none items-center">
        <div className=" relative w-[180px] lg:w-[400px] h-[209px] lg:h-[436px] border-8 border-primary ">
          <Image src={About} fill alt="About" />
        </div>
        <div className=" w-full justify-center items-start px-6 min-h-[335px] gap-6 lg:bg-white rounded-l-lg min-w-[300px] lg:min-w-[540px] flex flex-col">
          <h1 className=" text-4xl text-black">
            درباره <span className=" text-primary">منوما</span>
          </h1>
          <p className=" text-black max-w-[820px]">
            پلتفرم منوی دیجیتال "منوما" یک ابزار نوآورانه در صنعت رستوران‌داری
            است که به منظور بهبود تجربه مشتریان و کارآمدی مدیریت رستوران‌ها
            طراحی شده است. این پلتفرم امکان مشاهده و انتخاب منوهای رستوران را به
            صورت دیجیتال فراهم می‌کند، به گونه‌ای که مشتریان می‌توانند از طریق
            گوشی‌های هوشمند یا تبلت‌های خود، به منوی رستوران دسترسی پیدا کنند و
            سفارشات خود را به راحتی ثبت کنند.
          </p>
        </div>
      </div>

      <div className=" flex flex-col items-center gap-6 mt-24">
        <h1 className=" text-5xl text-black">
          ارتباط با <span className=" text-primary">ما</span>
        </h1>

        <div className=" w-full flex flex-col lg:flex-row gap-3">
          <div className=" relative w-[300px] lg:w-[700px] h-[90px] lg:h-[162px]  ">
            <Image src={call1} fill alt="call" />
          </div>
          <div className=" relative w-[300px] lg:w-[700px] h-[90px] lg:h-[162px]  ">
            <Image src={call2} fill alt="call" />
          </div>
        </div>
      </div>

      <div className=" w-full text-black gap-2  flex justify-center items-center h-10 ">
        <p className=" text-xs">
          تمام حقوق مادی و معنوی این وبسایت متعلق به منوما میباشد. 2025
        </p>
        <Copyright size={13} />
      </div>
    </div>
  );
}

export default LandingFooter;
