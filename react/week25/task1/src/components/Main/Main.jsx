import React from 'react';
import { Chart } from "react-google-charts";
import { SketchPicker } from 'react-color';

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
  export const options = {
    title: "My Daily Activities",
  };

export default function Main() {
    return (
        <div>
            {/* <Chart
                chartType="ScatterChart"
                data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                width="100%"
                height="400px"
                legendToggle
            /> */}
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
            <h2>SketchPicker</h2>
            <SketchPicker />
        </div>
    )
}