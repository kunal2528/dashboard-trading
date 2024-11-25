import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import data from "../data/lineChartData.json";

const LineChartComponent = () => (
  <div>
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="balance" stroke="#8884d8" />
    </LineChart>
  </div>
);

export default LineChartComponent;
