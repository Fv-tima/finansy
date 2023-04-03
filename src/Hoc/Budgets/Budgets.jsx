import React, { useState } from "react";
import { useCol } from "../../context/ColContext";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js";

export default function Budgets() {
  const { budgetData } = useCol;
  return (
    <div className="shadow-lg p-5 m-5 rounded-lg w-[400px] h-[400px]">
      <h2 className="text-2xl text-deepBlue font-bold">Budgets</h2>
      {budgetData.length === 0 ? <Emptybudgets /> : <BudgetsCharts />}
    </div>
  );
}

export function Emptybudgets() {
  return (
    <div className="flex justify-center items-center">
      <p className="lgBlack">Please add budgets first</p>
    </div>
  );
}

export function BudgetsCharts() {
  const { budgetData } = useCol;
  const [chartData, setChartData] = useState({
    labels: budgetData.map((data) => data.name),
    datasets: [
      {
        label: "Budgets",
        data: budgetData.map((data) => data.amount),
        backgroundColor: [
          " hsl(0, 0%, 82%)",
          "hsl(198, 71%, 81%)",
          " hsl(198, 73%, 93%)",
          "hsl(197, 49%, 41%)",
        ],
      },
    ],
  });
  return <Pie data={chartData} />;
}
