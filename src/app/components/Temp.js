import { CiTempHigh } from "react-icons/ci";

const Temp = () => {
  return (
    <div className="w-full h-fit bg-[#151515] p-4 m-2 rounded-md font-inter">
      <div className="text-white text-md font-medium">
        <h1>Temperature</h1>
      </div>
      <div className="pt-2 flex items-center gap-2">
        <div className="flex items-center">
          <CiTempHigh fill="#fff" size={"50px"} />
        </div>
        <div className="bg-[#101010] w-full h-fit px-4 py-2 rounded-md text-center font-bold font-poppins text-3xl text-white">
          60
        </div>
      </div>
    </div>
  );
};

export default Temp;
