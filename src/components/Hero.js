import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col justify-end" style={{ height: "745px" }}>
      <div className="flex items-end justify-end" style={{ height: "500px" }}>
        <div className="flex flex-col items-center mb-20 text-center md:w-1/3 md:h-full mt-auto">
          <Image
            src="/assets/app-store.png"
            width={90}
            height={90}
            alt=""
            className=""
          />
          <h2 className="font-bold text-white text-xl mt-8">
            IOS & Android <br /> Apps
          </h2>
          <p className="text-white italic mt-8">
            Let&apos;s empower you with a <br /> brand new original App <br />{" "}
            GOMAKEAPPS.COM
          </p>
          <div className="mt-auto">
            <button className="border-4 border-white text-white px-4 py-2 rounded-full">
              CREATE NOW
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mb-20 text-center md:w-1/3 md:h-full mt-auto">
          <Image
            src="/assets/imac.png"
            width={90}
            height={90}
            alt=""
            className=""
          />
          <h2 className="font-bold text-white text-xl mt-8">Websites & SEO</h2>
          <p className="text-white italic mt-8">
            We will build for you an <br /> astonishing website !
          </p>
          <div className="mt-auto">
            <button className="border-4 border-white text-white px-4 py-2 rounded-full">
              CREATE NOW
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mb-20 text-center md:w-1/3 md:h-full mt-auto">
          <Image
            src="/assets/clapperboard.png"
            width={90}
            height={90}
            alt=""
            className=""
          />
          <h2 className="font-bold text-white text-xl mt-8">Video Animation</h2>
          <p className="text-white italic mt-8">
            Make short videos to promote <br /> and explain your business <br />{" "}
            or prepare for an event
          </p>
          <div className="mt-auto">
            <button className="border-4 border-white text-white px-4 py-2 rounded-full">
              CREATE NOW
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mb-20 text-center md:w-1/3 md:h-full mt-auto">
          <Image
            src="/assets/palette.png"
            width={90}
            height={90}
            alt=""
            className=""
          />
          <h2 className="font-bold text-white text-xl mt-8">Content Design</h2>
          <p className="text-white italic mt-8">
            Design brochures, flyers, <br /> social media posts & more
          </p>
          <div className="mt-auto">
            <button className="border-4 border-white text-white px-4 py-2 rounded-full">
              CREATE NOW
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/assets/scroll.png"
          width={20}
          height={40}
          alt=""
          className=""
        />
      </div>
    </div>
  );
}

export default Hero;
