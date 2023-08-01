import Image from "next/image";

function Logo() {
  return (
    <Image
          src="/assets/gomakeapps-official2.png"
          width={121}
          height={151}
          alt="logo"
          className="mr-16"
        />
  )
}

export default Logo