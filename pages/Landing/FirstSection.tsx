/** @format */

import Image from "next/image";
import React from "react";
import dashlap from "@/public/LandingIcons/dashlap.png";
import { ArrowDown2 } from "iconsax-react";
import OptionsCard, {
  OptionsCardProps,
} from "@/components/pages/Landing/OptionsCard";
import data from "../../util/data/Landing.json";

function FirstSection() {
  return (
    <div
      id="FirstSection"
      className=" w-full flex flex-col gap-10 py-24  justify-between  h-fit"
    >
      <div className=" w-full flex justify-center items-center">
        <h1 className=" text-[20px] lg:text-5xl">امکانات</h1>
      </div>

      <div className=" w-full px-6 lg:px-0 flex flex-col gap-6 items-center justify-center">
        {data.map((item: OptionsCardProps) => (
          <OptionsCard
            key={item.index}
            index={item.index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default FirstSection;
