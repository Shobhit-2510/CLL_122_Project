"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black w-full h-[10vh] flex items-center gap-10 px-10 text-white">
      <div>Home</div>
      <div>Research</div>
      <div>Team</div>
      <Link href={"./CLL_122_Project/about"}>About us</Link>
    </div>
  );
};

export default Navbar;
