import CardOne from "@/components/CardOne";
import CardThree from "@/components/CardThree";
import CardTwo from "@/components/CardTwo";
import Image from "next/image";

function SectionTwo() {
  return (
    <div
      className="flex justify-between items-center"
      style={{
        height: "1300px",
      }}
    >
      <div
        className="h-4/5 flex items-center justify-start"
        style={{ width: "7%" }}
      >
        <Image
          src="/assets/shape-1.png"
          width={95}
          height={500}
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className="flex flex-col h-4/5 w-3/4">
        <div className="flex justify-center items-center">
          <Image
            src="/assets/thunder-2.png"
            width={30}
            height={60}
            alt=""
            className="mr-10"
          />
          <h1
            className="uppercase text-5xl font-medium"
            style={{
              color: "transparent",
              backgroundImage: "linear-gradient(-45deg, #0033ff, #66ccff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Nos forfaits <span className="font-extrabold">vip premium</span>
          </h1>
        </div>
        <div className="flex items-end justify-between h-full">
          <CardOne />
          <CardTwo />
          <CardThree />
        </div>
      </div>
      <div
        className="h-4/5 flex items-center justify-end"
        style={{ width: "7%" }}
      >
        <Image
          src="/assets/shape-2.png"
          width={95}
          height={500}
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default SectionTwo;
