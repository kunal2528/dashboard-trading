import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import data from "../data/pieChartData.json";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

const PieChartComponent = () => (
  <PieChart width={200} height={200}>
    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default PieChartComponent;
