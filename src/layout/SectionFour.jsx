import Image from "next/image";

function SectionFour() {
  return (
    <div className="h-[855px] bg-top bg-no-repeat bg-contain bg-[url('/assets/people.png')] bg-gray-100">
      <div className=" h-[855px] bg-top bg-no-repeat bg-contain bg-[url('/assets/shape-4.png')]">
        <div className="flex flex-col h-full justify-center items-center">
          <div className="text-white font-semibold text-3xl mb-6">
            AVIS CLIENTS
          </div>
          <div className=" flex justify-around items-center w-full mt-6">
            <div className="ml-5">
              <button className="bg-white rounded-full w-32 h-32 flex justify-center items-center">
                <Image
                  src="/assets/left-arrow.png"
                  width={40}
                  height={40}
                  alt="logo"
                />
              </button>
            </div>
            <div className="h-[300px] w-[600px] border-2 rounded-[70px] bg-white text-black flex flex-col justify-around items-center">
              <p className="text-black text-center text-xl font-medium">
                Entreprise très professionnelle, <br /> ils conçoivent des
                applications <br /> extraordinaires. Je suis très <br />{" "}
                satisfaite de leurs services de <br /> développement et design.
                Je <br /> vous les recommande sans <br /> hésiter!
              </p>
              <p
                className="text-2xl font-bold"
                style={{
                  color: "transparent",
                  backgroundImage: "linear-gradient(180deg, #66ccff, #0033ff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Héloise P.
              </p>
            </div>
            <div className="mr-5">
              <button className="bg-white rounded-full w-32 h-32 flex justify-center items-center">
                <Image
                  src="/assets/right-arrow.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
