import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="bg-[#0E1117] text-white">
      <div className="flex flex-row flex-wrap items-center justify-around w-2/3 aspect-square mx-auto p-0">
        <div className="w-fit rounded-full text-center">
          <Image
            src={"shobhit.png"}
            width={300}
            height={300}
            className="rounded-full"
            priority
            alt="Shobhit Kumar"
          ></Image>
          <p className="mt-4 text-2xl">Shobhit Kumar</p>
        </div>
        <div className="w-fit rounded-full text-center">
          <Image
            src={"/sujal.png"}
            width={300}
            height={300}
            className="rounded-full"
            alt="Sujal Madaan"
          ></Image>
          <p className="mt-4 text-2xl">Sujal Madaan</p>
        </div>
        <div className="w-fit rounded-full text-center">
          <Image
            src={"/deepanshu.jpg"}
            width={300}
            height={300}
            className="rounded-full"
            alt="Deepanshu Pathriya"
          ></Image>
          <p className="mt-4 text-2xl">Deepanshu Pathriya</p>
        </div>
        <div className="w-fit rounded-full text-center">
          <Image
            src={"/rishabh.jpg"}
            width={300}
            height={300}
            className="rounded-full"
            alt="Rishabh Dewangan"
          ></Image>
          <p className="mt-4 text-2xl">Rishabh Dewangan</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
