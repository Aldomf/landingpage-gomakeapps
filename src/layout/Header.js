import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import LanguageSelector from "@/components/LanguageSelector";
import Hero from "@/components/Hero";

function Header() {
  return (
    <header
      className="bg-top bg-no-repeat bg-contain bg-[url('/assets/electronics-development-engineer.png')] "
      style={{
        height: "958px",
      }}
    >
      <div className="w-full h-32 flex items-center justify-center bg-[url('/assets/rectangle-1.png')]">
        <Logo />
        <Navbar />
        <LanguageSelector />
      </div>
      <Hero />
    </header>
  );
}

export default Header;
