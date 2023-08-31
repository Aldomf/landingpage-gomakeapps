import Image from "next/image";

function Footer() {
  return (
    <div className="h-[400px] flex justify-around">
      <div className=" mt-8">
        <h3 className="font-semibold mb-4">Services</h3>
        <p className="mt-2">
          Développer une Application <br /> Mobile
        </p>
        <p className="mt-2">Créer un site Internet</p>
        <p className="mt-2">
          Monter une video de presentation <br /> d&apos;activité
        </p>
        <p className="mt-2">Concevoir du contenu Design</p>
        <p className="mt-2">Réferencement de site internet</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h3 className="font-semibold mb-4">La Société</h3>
        <Image
          src="/assets/gomakeapps-logo-3.png"
          width={70}
          height={100}
          alt="logo"
          className=" mb-6"
        />
        <p>Copyright © 2022 - GOMAKEAPPS.COM</p>
        <p>Tous droits résérvés</p>
      </div>
      <div className=" mt-8">
        <h3 className="font-semibold mb-4">Légal</h3>
        <p className="mt-2">Condition Général d&apos;Utilisation</p>
        <p className="mt-2">Mentions légales</p>
        <p className="mt-2">Politique de confidentialité</p>
      </div>
    </div>
  );
}

export default Footer;
