import React from "react";

export interface OptionsCardProps {
  index: number; // عدد بزرگ در ابتدا (مثلاً 1)
  title: string; // تیتر اصلی
  description: string; // توضیحات
  imageUrl: string; // آدرس عکس
}

function OptionsCard({
  index,
  title,
  description,
  imageUrl,
}: OptionsCardProps) {
  return (
    <div className="w-full flex flex-col  lg:flex-row gap-4  lg:gap-8 max-w-[1080px] lg:items-center">
      <h1 className=" text-[50px] lg:text-[80px] text-primary/30">{index}</h1>

      <div className="flex flex-col gap-3 flex-1">
        <h1 className="text-primary text-lg lg:text-3xl">{title}</h1>
        <p className="text-[20px] text-gray-700">{description}</p>
      </div>

      <div className="w-full  lg:max-w-[520px] aspect-[16/9] rounded-2xl overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default OptionsCard;
