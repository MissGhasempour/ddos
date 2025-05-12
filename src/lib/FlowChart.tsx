"use client";
import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function FlowChart({ data = [] }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !Array.isArray(data)) {
      console.warn("No chartRef or data not array:", chartRef.current, data);
      return;
    }

    // const arr = [1,2,3,4]
    // const labels = arr.map(label => {return label})
    const labels = data.map((item) => item.t);
    const values = data.map((item) => item.lrl);
    console.log("labels:", labels);
    console.log("values:", values);

    const ctx = chartRef.current.getContext("2d");

    // Clean up old chart if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: values,
            backgroundColor: "rgba(50, 190, 179, 0.6)",
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }, [data]);

  return <canvas className="" ref={chartRef}></canvas>;
}
