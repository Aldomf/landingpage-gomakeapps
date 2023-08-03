import Image from "next/image";

function SectionOne() {
  return (
    <div
      className="bg-top bg-no-repeat bg-contain bg-[url('/assets/shutterstock_team.png')]
      "
      style={{
        height: "970px",
        backgroundSize: "100%",
      }}
    >
      <div
        className="bg-[url('/assets/overlay.png')] w-full h-full bg-top bg-no-repeat bg-contain flex flex-col"
        style={{
          backgroundSize: "100%",
        }}
      >
        <div className="flex justify-center items-center mt-24">
          <Image
            src="/assets/design-2.png"
            width={50}
            height={50}
            alt="logo"
            className="mr-10"
          />
          <h1 className="uppercase text-white text-5xl font-bold">
            nos cas d&apos;études de préférence
          </h1>
        </div>
        <div className="flex items-center h-full">
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
          <div
            className="m-auto w-9/12 h-3/4 flex flex-col justify-between"
            style={{
              backgroundColor: "rgba(203, 213, 224, 0.4)",
              borderRadius: "80px",
            }}
          >
            <div className="flex justify-around items-center mt-7 h-28">
              <Image
                src="/assets/banner-playstore.png"
                width={150}
                height={30}
                alt=""
              />
              <div
                className="w-1/2 h-14 text-xl rounded-full bg-white flex justify-center items-center"
                style={{ boxShadow: "0 0 30px rgba(0, 76, 255, 0.5)" }}
              >
                <p
                  className="font-medium"
                  style={{
                    color: "transparent",
                    backgroundImage:
                      "linear-gradient(-45deg, #0033ff, #66ccff)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  JUDGE-FOOD Adviser App
                </p>
              </div>
              <Image
                src="/assets/gomakeapps-logo-3.png"
                width={60}
                height={60}
                alt=""
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/assets/phone-1.png"
                width={282}
                height={950}
                alt=""
              />
              <Image
                src="/assets/phone-2.png"
                width={282}
                height={950}
                alt=""
              />
              <Image
                src="/assets/phone-3.png"
                width={282}
                height={950}
                alt=""
              />
              <Image
                src="/assets/phone-4.png"
                width={282}
                height={950}
                alt=""
              />
            </div>
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
  );
}

export default SectionOne;
