"use client";
import Navbar from "@/app/components/Navbar";
import TopNav from "@/app/components/TopNav";
import Linechart from "@/app/components/Linechart";
import Footer from "@/app/components/Footer";
import Temp from "./components/Temp";
import Humid from "./components/Humid";
import AirQuality from "./components/AirQuality";
import BarChart from "./components/BarChart";
import Piechart from "./components/Piechart";

export default function Home() {
  return (
    <div className="bg-[#101010] overflow-hidden w-full">
      <div className="md:flex">
        <Navbar />
        <div className="md:w-[84.8%] w-full min-h-screen flex flex-col">
          <TopNav />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-2 mr-4">
            <Temp />
            <Humid />
            <AirQuality />

            {/* ===== Charts  ===== */}

            <Linechart />
            <Piechart />
            {/* <CompPie /> */}
            <BarChart />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
