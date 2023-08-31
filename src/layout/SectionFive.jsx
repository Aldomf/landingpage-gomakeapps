import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";

function SectionFive() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 ">
      <div className="mt-6">
        <button className="flex justify-center items-center px-6 py-4 rounded-full bg-white" style={{
              boxShadow: "0 0 10px rgba(0, 76, 255, 0.5)",
            }}>
          <Image
            src="/assets/telephone-call.png"
            width={15}
            height={15}
            alt="logo"
            className="mr-2"
          />
          <p className="font-bold"
            style={{
              color: "transparent",
              backgroundImage: "linear-gradient(180deg, #66ccff, #0033ff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Appeler l&apos;agence
          </p>
        </button>
      </div>
      <Contact />
      <div className="flex flex-col justify-center items-center w-full mt-10">
        <h4 className="font-bold mb-3">RETROUVEZ NOUS SUR LES RESEAUX SOCIAUX !</h4>
        <div className="flex justify-center items-center w-full my-6">
          <div
            className="flex flex-col justify-center items-center rounded-[50px] bg-white"
            style={{ boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.2)" }}
          >
            <Link
              href=""
              className="flex flex-col justify-center items-center py-4 px-14"
            >
              <Image
                src="/assets/facebook.png"
                width={50}
                height={50}
                alt="logo"
                className="mb-2"
              />
              <p
                className="font-semibold"
                style={{
                  color: "transparent",
                  backgroundImage: "linear-gradient(180deg, #66ccff, #0033ff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Facebook
              </p>
            </Link>
          </div>
          <div
            className="flex flex-col justify-center items-center rounded-[50px] mx-6 bg-white"
            style={{ boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.2)" }}
          >
            <Link
              href=""
              className="flex flex-col justify-center items-center py-4 px-14"
            >
              <Image
                src="/assets/youtube.png"
                width={70}
                height={40}
                alt="logo"
                className="mb-2"
              />
              <p
                className="font-semibold"
                style={{
                  color: "transparent",
                  backgroundImage: "linear-gradient(180deg, #66ccff, #0033ff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                YouTube
              </p>
            </Link>
          </div>
          <div
            className=" flex flex-col justify-center items-center rounded-[50px] bg-white"
            style={{ boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.2)" }}
          >
            <Link
              href=""
              className="flex flex-col justify-center items-center py-4 px-14"
            >
              <Image
                src="/assets/instagram.png"
                width={50}
                height={50}
                alt="logo"
                className="mb-2"
              />
              <p
                className="font-semibold"
                style={{
                  color: "transparent",
                  backgroundImage: "linear-gradient(180deg, #66ccff, #0033ff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Instagram
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
