import React from "react";
import Image from "next/image";
import Link from "next/link";

function SectionThree() {
  return (
    <div
      className="flex flex-col justify-center w-full bg-top bg-no-repeat bg-contain bg-[url('/assets/group-4.png')]"
      style={{
        height: "707px",
      }}
    >
      <div className="flex justify-center items-center">
        <Image
          src="/assets/tick-2.png"
          width={50}
          height={50}
          alt="logo"
          className="mr-10"
        />
        <h1 className="text-white font-bold text-5xl uppercase">Services</h1>
      </div>
      <div className="flex flex-col justify-center h-4/6">
        <div className="flex justify-around items-center ">
          <h2 className="text-white font-bold text-lg ">
            Development <br /> & Engineering
          </h2>
          <h2 className="text-white font-bold text-lg pl-6 w-36">Design</h2>
          <h2 className="text-white font-bold text-lg w-28">Strategy</h2>
        </div>
        <div className="flex justify-around">
          <Link
            href=""
            className="text-primary bg-white w-36 h-12 flex justify-center items-center rounded-full font-medium"
          >
            Learn More
          </Link>
          <Link
            href=""
            className="text-primary bg-white w-36 h-12 flex justify-center items-center rounded-full font-medium"
          >
            Learn More
          </Link>
          <Link
            href=""
            className="text-primary bg-white w-36 h-12 flex justify-center items-center rounded-full font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
