import React, { useState, useRef } from "react";
import { useCol } from "../../context/ColContext";
import { Doughnut } from "react-chartjs-2";
import  "chart.js/auto";

export default function Budgets() {
  const { budgetData, loader } = useCol;
  return (
    <div className="shadow-lg p-5 m-5 rounded-lg w-[400px] h-[400px]">
      <h2 className="text-2xl text-deepBlue font-bold">Budgets</h2>
      {budgetData?.map((data)=>data.category)}
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
  const { budgetData, loader } = useCol;
  const ref = useRef()
  const [chartData, setChartData] = useState({
    labels: "Budgets",
    datasets: [
      {
        label: [budgetData?.map((data) => data.name)],
        data: [budgetData?.map((data) => data.category)],
        backgroundColor: [
          " hsl(0, 0%, 82%)",
          "hsl(198, 71%, 81%)",
          " hsl(198, 73%, 93%)",
          "hsl(197, 49%, 41%)",
        ],
      },
    ],
  });
  return <Doughnut ref={ref} data={chartData}></Doughnut>;
}
