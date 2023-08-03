import Image from "next/image";

function CardTwo() {
  return (
    <div
      className="flex flex-col"
      style={{
        width: "31%",
        borderRadius: "90px",
        height: "90%",
        boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        className="flex justify-center items-center text-4xl bg-primary"
        style={{
          height: "10%",
          borderTopLeftRadius: "90px",
          borderTopRightRadius: "90px",
        }}
      >
        <h2 className="text-white font-bold">Privilege</h2>
      </div>
      <div className="w-full h-3/4 flex flex-col justify-center items-center">
        <div
          className=" border-blue-600 w-4/6 flex flex-col justify-center items-center mt-5 mb-6"
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
              src="/assets/design-black.png"
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
              src="/assets/website-black.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>
              Plateforme en ligne toutes fonctionnalités intégré et crées sur
              mesure
            </p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/option-black.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>
              Votre Application mobile ios <span className="font-bold">ET</span>{" "}
              Android compris
            </p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/coding-black.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>Panneau d&apos;administration Dashboard Admin en ligne</p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/settings-cogwheel-black.png"
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
              src="/assets/programming-black.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>Développement 100% flexible</p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium">
            <Image
              src="/assets/clapperboard-black.png"
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
          className=" font-bold text-lg w-3/5 rounded-full h-2/6"
          style={{ boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.2)" }}
        >
          Buy now
        </button>
        <div className="flex justify-around w-2/6">
          <Image
            src="/assets/monitor.png"
            width={30}
            height={30}
            alt=""
            className="pb-6"
          />
          <Image
            src="/assets/smartphone.png"
            width={30}
            height={30}
            alt=""
            className="pb-6"
          />
        </div>
      </div>
    </div>
  );
}

export default CardTwo;
