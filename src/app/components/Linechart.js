"use client"; // Pastikan ini ada di Next.js 13 app directory

import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  {
    name: "Jan",
    revenue: 4000,
    profit: 2400,
  },
  {
    name: "Feb",
    revenue: 3000,
    profit: 1398,
  },
  {
    name: "Mar",
    revenue: 9800,
    profit: 2000,
  },
  {
    name: "Apr",
    revenue: 3908,
    profit: 2780,
  },
  {
    name: "May",
    revenue: 4800,
    profit: 1890,
  },
  {
    name: "Jun",
    revenue: 3800,
    profit: 2390,
  },
];

const Linechart = () => {
  return (
    <div className="w-full h-fit bg-[#151515] mx-2 mb-2 md:p-7 p-2 rounded-md">
      <div className="text-white text-center flex items-center justify-center mb-4">
        Sales Line Chart
      </div>
      <div style={{ width: "100%", height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={salesData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Linechart;
