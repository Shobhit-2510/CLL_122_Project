// components/ChartComponent.js
"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph({ Kc, T, T1, Cpa, Cpb, dHro, To }) {
  function X(T) {
    const dHr = dHro + (Cpb - Cpa) * (T - T1);
    const X = (-Cpa * (T - To)) / dHr;
    return X;
  }
  function Xe(T) {
    const R = 1.987; // cal/(mol*K)

    // Compute the exponent with a better handling approach
    const exponent = (dHro / R) * (1.0 / T1 - 1.0 / T);
    console.log("Exponent:", exponent);

    // Compute Ke with better precision
    const Ke = Kc * Math.exp(exponent);
    console.log("Ke:", Ke);

    // Compute Xe with improved calculation
    const XeValue = Ke / (1 + Ke);
    console.log("Xe Value:", XeValue);

    return XeValue;
  }

  const data = {
    labels: [390, 420, 450, 480, 510, 540],
    datasets: [
      {
        label: "X vs T",
        data: [X(T), X(T + 20), X(T + 40), X(T + 60), X(T + 80), X(T + 100)],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
      {
        label: "Xe vs T",
        data: [
          Xe(T),
          Xe(T + 20),
          Xe(T + 40),
          Xe(T + 60),
          Xe(T + 80),
          Xe(T + 100),
        ],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Plot of Xe and X" },
    },
  };

  return (
    <div style={{ width: "800px", height: "" }}>
      {" "}
      {/* Adjust size here */}
      <Line data={data} options={options} />
    </div>
  );
}
