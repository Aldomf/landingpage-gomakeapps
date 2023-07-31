import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import LanguageSelector from "@/components/LanguageSelector";

function Header() {
  return (
    <header
      className="bg-top bg-no-repeat bg-contain"
      style={{
        backgroundImage: "url('/assets/electronics-development-engineer.png')",
        height: "1259px",
      }}
    >
      <div
        className="w-full h-32 flex items-center justify-between"
        style={{
          backgroundImage: "url('/assets/rectangle-1.png')",
        }}
      >
        <Logo />
        <Navbar />
        <LanguageSelector />
      </div>
    </header>
  );
}

export default Header;
