import Image from "next/image";

function CardOne() {
  return (
    <div
      className="text-[#007aff] flex flex-col"
      style={{
        width: "31%",
        borderRadius: "90px",
        height: "90%",
        boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        className="flex justify-center items-center text-4xl bg-[#0dff96]"
        style={{
          height: "10%",
          borderTopLeftRadius: "90px",
          borderTopRightRadius: "90px",
        }}
      >
        <h2 className="text-white font-bold">Premium</h2>
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
              src="/assets/design-3.png"
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
              src="/assets/settings-cogwheel-button.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>Maintenance anuelle et garantie de fonctionnement assuré</p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/shield.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>Installation des protocoles de sécurité HTTPS/SLL</p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/responsive-design.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>
              Site internet Responsive s&apos;adaptant aux écrans de
              smartphones, tablette et PC
            </p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/ranking.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>Référencement SEO structurelles</p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium mb-5">
            <Image
              src="/assets/technology.png"
              width={20}
              height={20}
              alt=""
              className="mr-5"
            />
            <p>Programme dernières technologies</p>
          </div>
          <div className="flex justify-start items-center text-sm font-medium">
            <Image
              src="/assets/clapperboard-2.png"
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
        <Image
          src="/assets/monitor.png"
          width={30}
          height={30}
          alt=""
          className="pb-6"
        />
      </div>
    </div>
  );
}

export default CardOne;
