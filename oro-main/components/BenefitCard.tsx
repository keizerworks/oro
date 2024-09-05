import React from "react";

export default function BenefitCard() {
  return (
    <div className="flex gap-4 flex-col sm:flex-row items-center  w-full">
      <div className="px-6 pb-14 py-7 min-w-[360px] bg-white rounded-xl text-black space-y-5">
        <p className="italic text-black text-base font-semibold">SMART MONEY</p>
        <p className="text-3xl font-grotesk leading-7 font-semibold pt-5">
          Gold that <br />{" "}
          <span className="text-[#CFAF6C]">generates yields</span>
        </p>
        <p className="text-lg font-jost leading-5 text-[#060606] opacity-50">
        Earn up-to 4% p.a. by staking your gold on ORO
        </p>
      </div>
      <div className="px-6 pb-14 py-7 min-w-[360px] bg-gradient-to-r from-[#CFAF6C] to-[#F7DA9C] rounded-xl text-black space-y-5">
        <p className="italic text-black text-base font-semibold">EASY TO USE</p>
        <p className="text-3xl font-grotesk  leading-7 font-semibold pt-5">
          Get started with
          <br /> as low as 1USDC{" "}
        </p>
        <p className="text-lg leading-5 font-jost text-[#060606] opacity-50">
        Seamless investing. Earn rewards as you save        </p>
      </div>
      <div className="px-6 pb-14 py-7 min-w-[360px] bg-white rounded-xl text-black space-y-5">
        <p className="italic text-black text-base font-semibold">
          EASY TO REEDEM
        </p>
        <p className="text-3xl font-grotesk leading-7 font-semibold pt-5">
        Instant Liquidity & <br />{" "}
          <span className="text-[#CFAF6C]">De-Fi Composable</span>
        </p>
        <p className="text-lg leading-5 font-jost  text-[#060606] opacity-50 ">
        24X7 Trading. Redeemable for USDC or physical gold
        </p>
      </div>
    </div>
  );
}
