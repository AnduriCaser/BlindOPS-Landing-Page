import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto md:ml-32">
          <Image
            src="/logo.png"
            alt="logo"
            width={125}
            height={125}
            className="cursor-pointer hover:animate-slowspin"
          />
        </Link>

        <div className="w-[400px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-center gap-24 w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#solutions" className="cursor-pointer">
              Solutions
            </a>
            <a href="#about-us" className="cursor-pointer">
              About us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
