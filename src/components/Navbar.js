import React from 'react'
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-around" style={{ width: "1100px" }}>
            <Link
              href=""
              className="w-40 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold"
              style={{ boxShadow: "0 0 10px rgba(0, 76, 255, 0.5)" }}
            >
              <Image
                src="/assets/home.png"
                width={18}
                height={18}
                alt="logo"
                className="mr-3"
              />
              Accueil
            </Link>
            <Link
              href=""
              className="w-40 h-10 rounded-full flex items-center justify-center bg-white text-primary font-normal"
              style={{ boxShadow: "0 0 10px rgba(0, 76, 255, 0.5)" }}
            >
              <Image
                src="/assets/google-docs.png"
                width={38}
                height={42}
                alt="logo"
                className=""
              />
              Devis
            </Link>
            <Link
              href=""
              className="w-40 h-10 rounded-full flex items-center justify-center bg-white text-primary font-normal"
              style={{ boxShadow: "0 0 10px rgba(0, 76, 255, 0.5)" }}
            >
              <Image
                src="/assets/design.png"
                width={40}
                height={40}
                alt="logo"
                className=""
              />
              Cas d'étude
            </Link>
            <Link
              href=""
              className="w-40 h-10 rounded-full flex items-center justify-center bg-white text-primary font-normal"
              style={{ boxShadow: "0 0 10px rgba(0, 76, 255, 0.5)" }}
            >
              <Image
                src="/assets/thunder.png"
                width={34}
                height={42}
                alt="logo"
                className=""
              />
              Souscription
            </Link>
            <Link
              href=""
              className="w-40 h-10 rounded-full flex items-center justify-center bg-white text-primary font-normal"
              style={{ boxShadow: "0 0 10px rgba(0, 76, 255, 0.5)" }}
            >
              <Image
                src="/assets/tick.png"
                width={40}
                height={40}
                alt="logo"
                className=""
              />
              Services
            </Link>
            <Link
              href=""
              className="w-40 h-10 rounded-full flex items-center justify-center bg-white text-primary font-normal"
              style={{ boxShadow: "0 0 10px rgba(0, 76, 255, 0.5)" }}
            >
              <Image
                src="/assets/audio-headset.png"
                width={40}
                height={40}
                alt="logo"
                className=""
              />
              Contact
            </Link>
          </nav>
  )
}

export default Navbar