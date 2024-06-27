import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full flex items-center justify-center m-2 rounded-md bg-[#151515] font-inter">
      <div className="px-7 py-2 flex gap-2 justify-center items-center">
        <p className="text-gray-400 text-sm">Copyright 2024</p>
        <FaCopyright fill="#fff" values={{ color: "white" }} size={"15px"} />
        <p className="text-gray-400 text-sm">ISEKAI SYSTEM v4 IoT</p>
      </div>
    </footer>
  );
};

export default Footer;
