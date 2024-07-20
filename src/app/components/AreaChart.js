"use client"; // Pastikan ini ada di Next.js 13 app directory

import React, { useState, useEffect } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Linechart = ({ datas, time, type, color }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const now = new Date();
    const newDataPoint = { time: now.toLocaleTimeString(), [type]: datas };
    setData((prevData) => {
      const updatedData = [...prevData, newDataPoint];

      if (updatedData.length > 100) {
        updatedData.shift();
      }

      return updatedData;
    });
  }, [datas, time]);

  return (
    <div className="w-full h-fit bg-[#151515] mx-2 mb-2 md:p-7 p-2 rounded-md">
      <div className="text-white text-center flex items-center justify-center mb-4">
        {type}
      </div>
      <div style={{ width: "100%", height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={1}
              tickCount={3}
            />
            <Tooltip />
            {/* <Line type="monotone" dataKey={type} stroke="#8884d8" /> */}
            <Area dataKey={type} type="monotone" fill={color} stroke={color} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Linechart;
