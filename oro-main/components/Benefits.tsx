import React from "react";
import BenefitCard from "./BenefitCard";
import Image from "next/image";
import video from "@/public/video.png"
import RoundLogo from "./RoundLogo";

export default function Benefits() {
  return (
    <div className="min-h-screen space-y-28 pb-28 text-white w-full">
      <div className="bg-white w-full flex gap-5 flex-col sm:flex-row s  bg-opacity-5 sm:py-[48px] py-7 px-[37px] rounded-3xl justify-between">
        <div className="h-full sm:w-[20%] my-auto flex flex-col gap-4 ">
          <p className="text-base text-white/60 ">WHY ORO</p>
          <p className="sm:text-[27px] text-[7vw] leading-8 font-semibold">
            <span className="text-transparent bg-gradient-to-r from-[#F5D89A] to-[#D1B16F] bg-clip-text inline-block">
              Benefits
            </span>{" "}
            like <br />
            never before
          </p>
          <button className="border px-2 text-[14px] w-[70%] mt-1 py-[7px] rounded-full text-[#CFAF6C] border-[#CFAF6C] hover:bg-[#CFAF6C] hover:text-black hover:font-semibold transition-all duration-500  ">Get Early Access</button>
        </div>
        <BenefitCard/>
      </div>

      <div className="flex items-center flex-col sm:flex-row   justify-between">
        <div className="flex flex-col items-center sm:items-start w-[80%] gap-4  sm:gap-6 justify-center sm:w-[15%]">
           <RoundLogo/> 
            <p className="text-3xl font-grotesk font-semibold"><span className="text-[#CFAF6C] ">ORO</span> in action</p>
            <p className="text-white font-jost opacity-60 leading-5 text-center sm:text-start">Invest, Track and Manage your assets in a simple, use-to-use web platform</p>
        </div>

        <Image width={1000} height={1000} src={video} alt="videoPreview" className="mt-4 sm:mt-0"/>


        
      </div>
    </div>
  );
}
