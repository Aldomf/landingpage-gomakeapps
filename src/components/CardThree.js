import Image from "next/image";

function CardThree() {
  return (
    <div
      className="text-white bg-black flex flex-col"
      style={{
        width: "31%",
        borderRadius: "90px",
        height: "90%",
        boxShadow: "0 0 30px rgba(0, 76, 255, 0.6)",
      }}
    >
      <div
        className="flex justify-center items-center text-4xl"
        style={{
          height: "10%",
          borderTopLeftRadius: "90px",
          borderTopRightRadius: "90px",
        }}
      >
        <h2 className="text-white font-bold">Unlimited</h2>
      </div>
      <div className="w-full h-3/4 flex flex-col justify-center items-center">
        <div
          className=" border-white w-4/6 flex flex-col justify-center items-center mt-5 mb-6"
          style={{ borderWidth: "0 0 2px 0" }}
        >
          <h3 className="text-2xl font-bold ml-10">&nbsp;,00 € / mois</h3>
          <p className="text-sm font-bold mb-2">1 an d&apos;engagement</p>
          <p className="font-medium mb-2">
            ou &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,00 € en <br /> une seule
            fois
          </p>
        </div>
        <div className="w-4/5">
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/design-white.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>
              Conception d&apos;un site vitrine sur mesure et personnalisé
              réalisable en moins de 24h*
            </p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/website-white.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>
              <span className="font-extrabold">Jusqu&apos;à 2</span> Plateforme
              en ligne toutes fonctionnalités intégré et crées sur mesure
            </p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/option-white.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>
              <span className="font-extrabold">Jusqu&apos;à 3</span> Application
              mobile ios <span className="font-extrabold">ET</span> Android
              compris
            </p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/coding-white.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>Panneau d&apos;administration Dashboard Admin en ligne</p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/settings-cogwheel-button-white.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>
              Maintenance annuelle et garantie de fonctionnement sur
              l&apos;ensemble des systèmes
            </p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/programming-white.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>Développement 100% flexible</p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium">
            <Image
              src="/assets/clapperboard-white.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>Production de vidéo professionnelle</p>
          </div>
        </div>
      </div>
      <div
        className="h-1/5 flex flex-col justify-around items-center"
        style={{
          borderBottomRightRadius: "90px",
          borderBottomLeftRadius: "90px",
        }}
      >
        <button
          className=" font-bold text-lg w-3/5 rounded-full h-2/6 bg-white text-black"
          style={{ boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.2)" }}
        >
          Buy now
        </button>
        <div className="flex justify-between items-center w-2/5">
          <Image
            src="/assets/monitor-white.png"
            width={30}
            height={30}
            alt=""
            className="pb-6"
          />
          <Image
            src="/assets/smartphone-white.png"
            width={30}
            height={30}
            alt=""
            className="pb-6"
          />
          <Image
            src="/assets/smartwatch.png"
            width={20}
            height={30}
            alt=""
            className="pb-6"
          />
        </div>
      </div>
    </div>
  );
}

export default CardThree;
