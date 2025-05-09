"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[rgb(14,17,23)] border-b-2 border-[rgb(255,75,75)] w-full h-[10vh] flex items-center gap-10 px-10 text-white">
      <Link href={"./"}>Home</Link>
      <Link href={"./adiabatic"}>Adiabatic Reactor</Link>
      <Link href={"https://non-adiabatic.streamlit.app/"}>Non Adiabatic Reactor</Link>
      <Link href={"./team"}>Team</Link>
    </div>
  );
};

export default Navbar;
