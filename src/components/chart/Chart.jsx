import React from "react";
import { Radar } from "react-chartjs-2";

//making stat array to pass to chart
const convertStatToData = (stats) => {
  const statArray = [];
  stats.forEach((element) => {
    statArray.push(element.base_stat);
  });
  console.log(statArray);
  const data = {
    labels: [
      `HP - ${statArray[0]}`,
      `ATTACK - ${statArray[1]}`,
      `DEFENSE - ${statArray[2]}`,
      `SPECIAL ATTACK - ${statArray[3]}`,
      `SPECIAL DEFENCE - ${statArray[4]}`,
      `SPEED - ${statArray[5]}`,
    ],
    datasets: [
      {
        label: "stats",

        data: [...statArray],
      },
    ],
  };
  console.log(data);
  return data;
};
const options = {
  //   responsive: true,
  scale: {
    ticks: {
      beginAtZero: true,
      max: 255,
      min: 1,
    },
  },
  title: {
    display: true,
    text: "Base Stats of the Species",
  },
};
export const Chart = (props) => {
  return (
    <div>
      <Radar options={options} data={convertStatToData(props.data)}></Radar>
    </div>
  );
};
