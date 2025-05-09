"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[rgb(14,17,23)] border-b-2 border-[rgb(255,75,75)] w-full h-[10vh] flex items-center gap-5 md:gap-10 px-10 text-white">
      <Link className="text-center"href={"./"}>Home</Link>
      <Link className="text-center"href={"./adiabatic"}>Adiabatic Reactor</Link>
      <Link className="text-center"href={"https://non-adiabatic.streamlit.app/"}>Non Adiabatic Reactor</Link>
      <Link className="text-center"href={"./team"}>Team</Link>
    </div>
  );
};

export default Navbar;
