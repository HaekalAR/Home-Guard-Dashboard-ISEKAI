"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
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

// Adapt data for PieChart
const pieDataRevenue = salesData.map((item) => ({
  name: item.name,
  value: item.revenue,
}));

const pieDataProfit = salesData.map((item) => ({
  name: item.name,
  value: item.profit,
}));

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AA6CC2",
  "#F15C74",
];

const Piechart = () => {
  return (
    <div className="w-full h-fit bg-[#151515] mx-2 mb-2 md:p-7 p-2 rounded-md">
      <div className="text-white text-center flex items-center justify-center mb-4">
        Piechart
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieDataRevenue}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {pieDataRevenue.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Pie
            data={pieDataProfit}
            cx="50%"
            cy="50%"
            innerRadius={120}
            outerRadius={160}
            fill="#82ca9d"
            dataKey="value"
            nameKey="name"
          >
            {pieDataProfit.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Piechart;
