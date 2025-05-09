"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import solve from "newton-raphson-method";
import Graph from "../components/Graph";

const Adiabatic = () => {
  const [Kc, setKc] = useState(100000);
  const [T, setT] = useState(0);
  const [T1, setT1] = useState(298);
  const [Cpa, setCpa] = useState(50);
  const [Cpb, setCpb] = useState(50);
  const [dHro, setdHro] = useState(-20000);
  const [To, setTo] = useState(300);

  function handleChangeKc(e) {
    setKc(parseFloat(e.target.value));
  }
  function handleChangeT(e) {
    setT(parseFloat(e.target.value));
  }
  function handleChangeT1(e) {
    setT1(parseFloat(e.target.value));
  }
  function handleChangeTo(e) {
    setTo(parseFloat(e.target.value));
  }
  function handleChangedHro(e) {
    setdHro(parseFloat(e.target.value));
  }
  function handleChangeCpa(e) {
    setCpa(parseFloat(e.target.value));
  }
  function handleChangeCpb(e) {
    setCpb(parseFloat(e.target.value));
  }

  function f(T) {
    const dHr = dHro + (Cpb - Cpa) * (T - T1);
    const R = 1.987; // cal/(mol*K)
    const Ke = Kc * Math.exp((dHro / R) * (1 / T1 - 1 / T));
    const Xe = Ke / (1 + Ke);

    const X = (-Cpa * (T - To)) / dHr;
    return Xe - X;
  }
  function Conversion(T) {
    const dHr = dHro + (Cpb - Cpa) * (T - T1);
    const X = (-Cpa * (T - To)) / dHr;
    return X;
  }

  function handleClick() {
    var guess = T;
    var Tnew = 0;
    var count = 5;
    for (var i = 0; i < 5; i++) {
      if (solve(f, guess + i * 10) != 0) {
        Tnew += solve(f, guess + i * 10);
        console.log(parseFloat(Tnew));
      } else count--;
    }
    Tnew /= count;
    setT(Tnew);
    console.log(parseFloat(T));
  }

  return (
    <>
      <div className="flex flex-col items-center bg-[rgb(14,17,23)] h-fit gap-8 py-8 text-white">
        <div className="text-4xl font-extrabold mx-2 text-center">
          Conversion calculator for Adiabatic Reactor
        </div>

        <div className="flex flex-row justify-between content-center items-stretch p-2 md:w-2/3 gap-5 h-48 flex-wrap">
          <input
            type="number"
            name="Kc at T1"
            id=""
            className="bg-zinc-700 text-white w-1/4 px-3 py-1 text-center rounded-md"
            placeholder="Kc at T1(K)"
            onChange={handleChangeKc}
          />
          <input
            type="number"
            name="T"
            id=""
            className="bg-zinc-700 text-white w-1/4 px-3 py-1 text-center rounded-md"
            placeholder="Guess T (K)"
            onChange={handleChangeT}
          />
          <input
            type="number"
            name="T1"
            id=""
            className="bg-zinc-700 text-white w-1/4 px-3 py-1 text-center rounded-md"
            placeholder="T1 (K)"
            onChange={handleChangeT1}
          />
          <input
            type="number"
            name="To"
            id=""
            className="bg-zinc-700 text-white w-1/4 px-3 py-1 text-center rounded-md"
            placeholder="Tₒ (K)"
            onChange={handleChangeTo}
          />
          <input
            type="number"
            name="dHro"
            id=""
            className="bg-zinc-700 text-white w-1/4 px-3 py-1 text-center rounded-md"
            placeholder="ΔHᵣ⁰ cal/mol"
            onChange={handleChangedHro}
          />
          <input
            type="number"
            name="Cpb"
            id=""
            className="bg-zinc-700 text-white w-1/4 px-3 py-1 text-center rounded-md"
            placeholder="Cpb (cal/mol K)"
            onChange={handleChangeCpb}
          />
          <input
            type="number"
            name="Cpa"
            id=""
            className="bg-zinc-700 text-white w-1/4 px-3 py-1 text-center rounded-md"
            placeholder="Cpa (cal/mol K)"
            onChange={handleChangeCpa}
          />
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white w-1/4 px-3 py-1 text-center rounded-md cursor-pointer hover:border-1 hover:border-black transition-all"
          >
            Calculate
          </button>
        </div>
        <div className="bg-zinc-700 md:w-2/3 flex flex-col justify-between px-10 py-4 text-xl rounded-xl">
          <div className="">T : {T} K</div>
          <div className="">
            Xe :{" "}
            {Conversion(T) > 0 ? Conversion(T) : "Please Fill Required Data"}
          </div>
        </div>
        <div className="md:w-fit w-full flex items-center justify-center bg-zinc-700 md:rounded-3xl md:p-5">
          <Graph
            Kc={Kc}
            T={T - 50}
            T1={T1}
            Cpa={Cpa}
            Cpb={Cpb}
            dHro={dHro}
            To={To}
          />
        </div>
      </div>
    </>
  );
};

export default Adiabatic;
