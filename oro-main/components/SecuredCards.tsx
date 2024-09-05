import React from "react";
import logoOne from "@/public/logo_one.svg"
import logoTwo from "@/public/logo_two.svg"
import logoThree from "@/public/logo_three.svg"
import logoFour from "@/public/logo_four.svg"
import Image from "next/image";
import Marquee from "react-fast-marquee";



export default function SecuredCards() {
  return (
    <Marquee>
    <div className="flex   sm:w-full font-grotesk">
      <div className="px-6 pb-14 mx-2 relative min-h-[230px] overflow-hidden py-7 min-w-[320px] sm:min-w-[360px] bg-white rounded-xl text-black space-y-5">
      <div className=" size-56 rounded-full flex -right-12 -top-12 absolute justify-center items-center border border-[#11253E] border-opacity-15">
        <div className="size-36 rounded-full  border-[#11253E] border-opacity-15 border"/>
        </div>
        <div className="size-44 -bottom-28 absolute border border-[#11253E] border-opacity-15 rounded-full "/>
        <div className="relative flex flex-col items-center z-10 gap-9">
            <Image width={35} height={35} alt="logo" src={logoOne} className=""/>
            <p className="text-3xl">1:1 Backing</p>
        </div>
      </div>


      <div className="px-6 pb-14 mx-2 relative min-h-[230px] overflow-hidden py-7 min-w-[320px] sm:min-w-[360px] bg-gradient-to-r from-[#CFAF6C] to-[#F7DA9C] rounded-xl text-black space-y-5">
      <div className=" size-56 rounded-full flex -right-12 -top-12 absolute justify-center items-center border border-[#11253E] border-opacity-15 ">
        <div className="size-36 rounded-full   border-[#11253E] border-opacity-15 border"/>
        </div>
        <div className="size-44 -bottom-28 absolute border border-[#11253E] border-opacity-15  rounded-full "/>
        <div className="relative flex flex-col items-center z-10 gap-9">
            <Image width={30} height={30} alt="logo" src={logoTwo} className=""/>
            <p className="text-3xl">Secure Custody</p>


        </div>
      </div>


      <div className="px-6 pb-14 mx-2 relative min-h-[230px] overflow-hidden py-7 min-w-[320px] sm:min-w-[360px] bg-white rounded-xl text-black space-y-5">
      <div className=" size-56 rounded-full flex -right-12 -top-12 absolute justify-center items-center border border-[#11253E] border-opacity-15">
        <div className="size-36 rounded-full  border-[#11253E] border-opacity-15 border gap-9"/>
        </div>
        <div className="size-44 -bottom-28 absolute border border-[#11253E] border-opacity-15 rounded-full "/>
        <div className="relative flex flex-col items-center z-10 gap-9">
            <Image width={35} height={35} alt="logo" src={logoThree} className=""/>
            <p className="text-3xl">Regulated</p>

        </div>
      </div>


      <div className="px-6 pb-14 mx-2 relative overflow-hidden min-h-[230px] py-7 min-w-[320px] sm:min-w-[360px]  bg-gradient-to-r from-[#CFAF6C] to-[#F7DA9C] rounded-xl text-black space-y-5">
      <div className=" size-56 rounded-full flex -right-12 -top-12 absolute justify-center items-center border border-[#11253E] border-opacity-15">
        <div className="size-36 rounded-full  border-[#11253E] border-opacity-15 border"/>
        </div>
        <div className="size-44 -bottom-28 absolute border border-[#11253E] border-opacity-15 rounded-full "/>
        <div className="relative flex flex-col items-center z-10 gap-9 ">
        <Image width={35} height={35} alt="logo" src={logoFour} className=""/>

            <p className="text-3xl">24/7 Trading</p>
            
        </div>
        </div>
    </div>
    </Marquee>
  );
}
