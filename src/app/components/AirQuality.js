import { MdAir } from "react-icons/md";

const AirQuality = ({ aq }) => {
  return (
    <div className="w-full h-fit bg-[#151515] p-4 m-2 rounded-md font-inter">
      <div className="text-white text-md font-medium">
        <h1>Air Quality</h1>
      </div>
      <div className="pt-2 flex items-center gap-2">
        <div className="flex items-center">
          <MdAir fill="#fff" size={"50px"} />
        </div>
        <div className="bg-[#101010] w-full h-fit px-4 py-2 rounded-md text-center font-bold font-poppins text-3xl text-white">
          {aq}
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
