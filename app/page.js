"use client";
import Image from "next/image";
import { useState } from "react";
import solve from "newton-raphson-method";
import Graph from "./components/Graph";
import { Ubuntu } from "next/font/google";

const ss = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Customize weights
  display: "swap",
});

export default function Home() {
  return (
    <>
      <div
        className={`items-center flex flex-col  text-5xl  font-bold text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black gap-10 pb-10`}
      >
        <div className={`mt-10 ${ss.className}`}>CRE Calculator</div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          <Image
            src="/plant.svg"
            alt="Chemical Plant"
            width={200}
            height={200}
            className="w-1/3 md:hidden"
            priority
          />
          <div className="text-[18px] w-1/2 px-10 font-normal leading-8">
            {`Welcome to CRE-Calcy – Your Smart Chemical Reaction Engineering
            Companion! Whether you're a student, researcher, or engineer,
            CRE-Calcy simplifies complex reactor calculations in seconds.
            Designed for accuracy and ease, our calculator supports: Batch,
            CSTR, and PFR reactor analysis Conversion, rate, and residence time
            calculations Isothermal and non-isothermal reaction modeling
            First-order, second-order, and zero-order kinetics Get real-time
            results, visual insights, and step-by-step outputs tailored for
            chemical engineering. No more manual solving or bulky spreadsheets —
            just clean, intuitive design built for chemical reaction analysis.
            🔬 Make CRE easy. Make it with CRE-Calcy`}
          </div>
          <Image
            src="/plant.svg"
            alt="Chemical Plant"
            width={200}
            height={200}
            className="w-1/3 hidden md:block"
            priority
          />
        </div>
      </div>
    </>
  );
}
