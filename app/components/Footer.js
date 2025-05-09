import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[rgb(14,17,23)] border-t-1 border-white text-white flex flex-col h-[20vh] md:h-[30vh] justify-center">
      <div className="content flex justify-center gap-4 md:gap-16 items-center ">
        <div className="left">
          <h1 className="text-sm md:text-xl mb-2 text-center">
            Contact details:
          </h1>
          <h2 className="text-xs md:text-sm text-center">
            <a href="tel:+919319894169" title="Shobhit Kumar">
              +91-9319894169
            </a>
          </h2>
          <h2 className="text-xs md:text-sm text-center">
            <a href="tel:+919518464465" title="Sujal Madaan">
              +91-9518464465
            </a>
          </h2>
        </div>
        <div className="mid">
          <h1 className="text-sm md:text-xl mb-2 text-center">Email:</h1>

          <h1 className="flex justify-center items-center">
            <a
              href="mailto: ch7230769@chemical.iitd.ac.in"
              className="text-xs md:text-sm text-center"
              title="Shobhit Kumar"
            >
              ch7230769@.iitd.ac.in
            </a>
          </h1>
          <h1 className="flex justify-center items-center">
            <a
              href="mailto: sshobhit1106@gmail.com"
              className="text-xs md:text-sm text-center"
              title="Sujal Madaan"
            >
              ch1231070@iitd.ac.in
            </a>
          </h1>
        </div>
        <div className="right">
          <h1 className="text-sm md:text-xl mb-2">Follow on:</h1>
          <h2 className="text-xs md:text-sm flex justify-evenly">
            <a href="https://github.com/Shobhit-2510" target="_blank">
              <Image
                src="/github-mark-white.png"
                className=" w-6 h-6 md:h-8 md:w-8 rounded-full"
                title="Shobhit Kumar"
                width={100}
                height={100}
                alt="Shobhit Kumar"
              />
            </a>
            <a href="https://github.com/sujalmadaan" target="_blank">
              <Image
                src="/github-mark-white.png"
                className=" w-6 h-6 md:h-8 md:w-8 rounded-full"
                title="Sujal Madaan"
                width={100}
                height={100}
                alt="Sujal Madaan"
              />
            </a>
          </h2>
        </div>
        <div className="line bg-gray-400 w-[1px] h-full hidden sm:block "></div>
        <div className="rightmost  flex-col justify-center hidden sm:flex ">
          <h1 className="text-sm md:text-xl mb-2">Links</h1>
          <Link className="text-xs md:text-sm" href={"/"}>
            Home
          </Link>
          <Link className="text-xs md:text-sm" href={"/adiabatic"}>
            Adiabatic Reactor
          </Link>
          <Link
            className="text-xs md:text-sm"
            href={"https://non-adiabatic.streamlit.app/"}
          >
            Non Adiabatic Reactor
          </Link>
          <Link className="text-xs md:text-sm" href={"/team"}>
            Team
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
