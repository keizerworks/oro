import React from "react";
import Logo from "./RoundLogo";
import Button from "./Button"
import Navbar from "./Navbar";
import NewNavbar from "./NewNavbar";
export default function hero() {
  return (
    <div>
      {/* <Navbar/> */}
      <NewNavbar/>
    <div className="w-full h-[72vh] sm:h-[75vh] flex flex-col justify-center text-white items-center">
      
      <div className="flex flex-col justify-center items-center sm:gap-4 gap-3  ">
        <Logo />

        <div className="text-center">
          <p className=" leading-10 text-[7vw]  font-grotesk sm:text-[36px] font-semibold">
            Stable & High Quality Yield
          </p>
          <p className=" leading-10 font-grotesk text-[7vw]  sm:text-[36px] font-semibold">
            from{" "}
            <span className="text-transparent bg-gradient-to-r from-[#F5D89A] to-[#D1B16F] bg-clip-text inline-block ">
              Tokenised Gold
            </span>
          </p>
        </div>

        <p className="font-jost text-white/60 text-xl text-center ">Institutional Grade. Regulated. Transparent. Invest as low as $1</p>

        <div className="flex gap-6 mt-5 items-center scale-90 sm:scale-100"><Button text={"Why ORO?"}/>
        <p className="underline font-jost  text-[22px] text-white/90 scale-90 sm:scale-100 ">Security</p></div>
      </div>
    </div>
    </div>
  );
}
