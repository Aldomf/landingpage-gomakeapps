import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="border-2 w-10/12 mt-24 rounded-[50px] flex flex-col justify-center items-center bg-white" style={{ boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.2)", }}>
      <div className="flex flex-col justify-center items-center w-4/5 h-52">
        <Image
          src="/assets/gomakeapps-logo-3.png"
          width={100}
          height={130}
          alt="logo"
          className="mb-4 "
        />
        <h3 className="mb-4 font-bold text-center text-lg">
          Vous avez un projet de développement Informatique ? Une idée <br />{" "}
          d&apos;application Mobile ? N&apos;hésitez pas a nous contacter !
        </h3>
        <p className="font-normal text-center pb-20">
          Vous pouvez joindre GOMAKEAPPS au +33 07 50 50 21 31 ou en remplissant
          un <br /> de nos formulaires. Nous prendrons contact avec vous dans
          les 24 heures
        </p>
      </div>
      <div className=" w-4/5 pb-8"> 
        <h1 className="text-3xl font-extrabold pb-10 pt-6" style={{
            color: "transparent",
            backgroundImage: "linear-gradient(180deg, #66ccff, #0033ff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}>Contactez-nous</h1>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <label htmlFor="nom" className="block text-sm font-normal text-gray-400">
              Votre nom
            </label>
            <label htmlFor="telephone" className="block text-sm font-normal text-gray-400">
              Votre numero de téléphone
            </label>
            <input
              type="text"
              name="nom"
              placeholder="Entrez votre nom"
              className="border-b-2 border-gray-400 placeholder-gray-500 pb-4 font-semibold block mb-4"
            />
            <input
              type="text"
              name="telephone"
              placeholder="Entrez vos coordonées"
              className="border-b-2 border-gray-400 placeholder-gray-500 pb-4 font-semibold block mb-4"
            />
          </div>

          <label htmlFor="email" className="block text-sm font-normal text-gray-400 mb-4">
            Votre e-mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="Entrez votre adresse e-mail"
            className="block mb-4 w-full border-b-2 border-gray-400 placeholder-gray-500 pb-4 font-semibold "
          />

          <label htmlFor="message" className="block text-sm font-normal text-gray-400 mb-4">
            Message
          </label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Entrez votre message"
            className="block w-full mb-10 border-b-2 border-gray-400 placeholder-gray-500 pb-4 font-semibold "
          ></textarea>
          <button
            className="px-7 py-3 rounded-full bg-black text-white font-medium"
            style={{
                backgroundImage: "linear-gradient(180deg, #66ccff, #0033ff)",
              }}
          >
            ENVOYER
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
