//@ts-nocheck
import React from "react";

export default function button({ text }) {
  return (
    <div className="px-8  font-jost font-semibold py-2 rounded-full bg-white text-black bg-gradient-to-r from-[#CFAF6C] to-[#F7DA9C] text-lg">
      {text}
    </div>
  );
}
