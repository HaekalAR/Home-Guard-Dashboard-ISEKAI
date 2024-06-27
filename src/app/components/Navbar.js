import Link from "next/link";
import Logo from "@/app/components/Logo";

// React Icons :
import { PiCommandBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="md:w-fit w-full md:h-screen h-fit ">
      <nav>
        {/* Mobile Breakpoint */}
        <div className="flex md:hidden font-poppins py-2 px-4 bg-black">
          <div className="flex items-center">
            <Logo />
            <h1 className="font-bold text-xl text-white">HoGu</h1>
          </div>
        </div>
        {/* Desktop Breakpoint */}
        <div className="md:flex hidden items-start min-h-screen w-fit bg-[#151515] font-poppins">
          <div className="mx-4 px-2 py-10">
            <div className="flex items-center justify-center">
              <Logo />
              <h1 className="text-white font-bold text-2xl text-center">
                HomeGuard
              </h1>
            </div>
            <p className="text-gray-400 text-center mb-10">⸻⸻</p>
            <div>
              <ul>
                <li className="text-white hover:bg-[#252525] transition-all duration-200 rounded-sm cursor-pointer px-7 py-2 bg flex gap-1 items-center">
                  <PiCommandBold values={{ color: "white" }} size={"20px"} />
                  <Link href="#" className="font-medium text-md">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
