"use client";

import React, { useState } from "react";
import Image from "next/image";

function Form() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [society, setSociety] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted");
    console.log("Lastname:", lastname);
    console.log("Firstname:", firstname);
    console.log("Society:", society);
    console.log("Email:", email);
  };

  return (
    <div
      className="m-auto w-3/4"
      style={{
        boxShadow: "0 0 30px rgba(0, 76, 255, 0.5)",
        height: "550px",
        borderRadius: "90px",
        zIndex: "1000",
      }}
    >
      <div className="flex justify-center m-auto w-3/4 pt-5 pb-5">
        <Image
          src="/assets/gomakeapps-logo-3.png"
          width={60}
          height={90}
          alt="logo"
          className=""
        />
        <p
          className="ml-10 uppercase text-4xl text-center"
          style={{
            color: "transparent",
            backgroundImage: "linear-gradient(-45deg, #0033ff, #66ccff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Quel est ce <span className="font-extrabold">super projet</span>{" "}
          <br /> que vous envisagez?
        </p>
      </div>
      <div
        className="m-auto bg-[#f1f4ff] w-5/6 h-3/5 flex flex-col justify-center"
        style={{ borderRadius: "90px" }}
      >
        <div className="flex flex-col">
          <form className="flex justify-around" onSubmit={handleSubmit}>
            <input
              type="text"
              name="lastname"
              placeholder="Nom*"
              className="bg-[#c4d1ff] rounded-full px-10 py-5 placeholder-black"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="text"
              name="firstname"
              placeholder="Prénom*"
              className="bg-[#c4d1ff] rounded-full px-10 py-5 placeholder-black"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </form>
          <div className="flex justify-center">
            <Image
              src="/assets/shuttle.png"
              width={50}
              height={50}
              alt="logo"
              className="ml-10"
            />
          </div>
          <form className="flex justify-around" onSubmit={handleSubmit}>
            <input
              type="text"
              name="society"
              placeholder="Société (optionel)"
              className="bg-[#c4d1ff] rounded-full px-10 py-5 placeholder-black"
              value={society}
              onChange={(e) => setSociety(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="bg-[#c4d1ff] rounded-full px-10 py-5 placeholder-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
        </div>
        <div className="flex flex-col items-center mt-10">
          <button
            className="px-7 py-3 rounded-full bg-black text-white font-medium text-lg"
            style={{
              boxShadow: "0 0 30px rgba(0, 76, 255, 0.5)",
              background:
                "linear-gradient(-45deg, black 0%, black 50%, #3399ff 50%, #0033ff 100%)",
            }}
            onClick={handleSubmit}
          >
            Commencer
          </button>
          <p className="text-xs text-[#0039ff] font-bold mt-1">
            Accéder au formulaire
          </p>
        </div>
      </div>
      <div>
        <p className="text-primary text-sm flex justify-center text-center mt-4">
          Remplissez le formulaire pour obtenir un ordre de prix et un de nos
          experts vous contactera pour l&apos;élaboration <br /> de votre
          projet. Nous avons hâte de vous rejoindre dans votre nouvelle aventure
          ! Demandez un devis
        </p>
      </div>
    </div>
  );
}

export default Form;
