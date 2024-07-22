"use client";
import Navbar from "@/app/components/Navbar";
import Isekai from "@/app/components/Isekai";
import TopNav from "@/app/components/TopNav";
import AreaCharts from "@/app/components/AreaChart";
import Footer from "@/app/components/Footer";
import Temp from "./components/Temp";
import Humid from "./components/Humid";
import AirQuality from "./components/AirQuality";
import LineChart from "./components/LineCharts";
import mqtt from "../mqtt";
import { useEffect, useState } from "react";

export default function Home() {
  const [connected, setConnected] = useState(false);

  const [temp, setTemp] = useState(0);
  const [saran, setSaran] = useState("");
  const [humid, setHumid] = useState(0);
  const [airquality, setAirQuality] = useState(0);

  const [tempPrediction, setTempPrediction] = useState(0);
  const [humidPrediction, setHumidPrediction] = useState(0);
  const [airqualityPrediction, setAirQualityPrediction] = useState(0);

  const now = new Date().toLocaleTimeString();
  const nows = new Date();
  nows.setMinutes(nows.getMinutes() + 10);
  const NextTenMin = nows.toLocaleTimeString();
  useEffect(() => {
    mqtt.on("connect", () => {
      console.log("Connected");
      setConnected(true);

      mqtt.subscribe("esp32/sensor");
      mqtt.subscribe("esp32/sensor/prediction");
      mqtt.subscribe("esp32/sensor/response");
    });

    mqtt.on("message", (topic, message) => {
      // Check if the message is from the desired topic
      if (topic === "esp32/sensor") {
        try {
          // Parse the JSON message
          const data = JSON.parse(message.toString());
          // console.log(data);
          // Update state variables with the dat
          setTemp(parseFloat(data.temperature.toFixed(1)));
          setHumid(parseFloat(data.humidity.toFixed(1)));
          setAirQuality(parseFloat(data.mq135.toFixed(1)));
        } catch (error) {
          console.error("Error parsing MQTT message", error);
        }
      }

      if (topic === "esp32/sensor/prediction") {
        try {
          const data = JSON.parse(message.toString());
          console.log(data);
          setTempPrediction(parseFloat(data.prediction.temperature.toFixed(1)));

          setHumidPrediction(parseFloat(data.prediction.humidity.toFixed(1)));

          setAirQualityPrediction(parseFloat(data.prediction.aqi.toFixed(1)));
        } catch (error) {
          console.error("Error parsing MQTT message", error);
        }
      }

      if (topic === "esp32/sensor/response") {
        try {
          const data = message.toString();
          console.log(data);
          setSaran(data);
        } catch (error) {
          console.error("Error parsing MQTT message", error);
        }
      }
    });

    mqtt.on("error", (error) => {
      console.log("Can't connect" + error);
      setConnected(false);
    });
  }, []);
  //
  return (
    <div className="bg-[#101010] overflow-hidden w-full">
      <div className="md:flex">
        <Navbar />
        <div className="md:w-[84.8%] w-full min-h-screen flex flex-col ">
          <TopNav isConnected={connected} />
          <div className="grid md:grid-cols-3 grid-cols-1 mr-4 gap-x-2 text-white ">
            <Temp temp={temp} />
            <Humid humid={humid} />
            <AirQuality aq={airquality} />

            {/* ===== Charts  ===== */}

            <AreaCharts
              datas={temp}
              time={now}
              type={"Temperature"}
              color={"#8884d8"}
            />
            <AreaCharts
              datas={humid}
              time={now}
              type={"Humidity"}
              color={"#e23670"}
            />
            <AreaCharts
              datas={airquality}
              time={now}
              type={"AirQuality"}
              color={"#8884d8"}
            />

            {tempPrediction ? (
              <LineChart
                datas={tempPrediction}
                time={NextTenMin}
                type={"Temperature"}
                color={"#8884d8"}
              />
            ) : (
              <p className="px-4 ">
                For now, prediction temperature data is unavailable.
              </p>
            )}

            {humidPrediction ? (
              <LineChart
                datas={humidPrediction}
                time={NextTenMin}
                type={"Humidity"}
                color={"#e23670"}
              />
            ) : (
              <p className="px-4">
                For now, prediction humidity data is unavailable.
              </p>
            )}

            {airqualityPrediction ? (
              <LineChart
                datas={airqualityPrediction}
                time={NextTenMin}
                type={"AirQuality"}
                color={"#8884d8"}
              />
            ) : (
              <p className="px-4">
                For now, prediction air quality data is unavailable.
              </p>
            )}
          </div>

          {/* Place Text for saran */}
          <div className="w-full h-fit bg-[#151515] p-4 m-2 rounded-md font-inter">
            <div className="text-white text-md font-medium">
              <h1>Saran</h1>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <div className=" w-full h-fit px-4 py-2 rounded-md text-center font-bold font-poppins text-xl text-white">
                {saran}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
