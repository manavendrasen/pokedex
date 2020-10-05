import React from "react";
import { Radar, HorizontalBar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  barGraph: {
    height: "50vh",
  },
});

//making stat array to pass to chart
const convertStatToData = (stats) => {
  const statArray = [];
  stats.forEach((element) => {
    statArray.push(element.base_stat);
  });
  // console.log(statArray);
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
        label: "Base Stats",
        borderColor: "#fc0352",
        backgroundColor: "#fc035240",
        fill: true,
        data: [...statArray],
      },
    ],
  };

  return data;
};

//for mobile
const convertStatToDataMobile = (stats) => {
  const statArray = [];
  stats.forEach((element) => {
    statArray.push(element.base_stat);
  });

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
        barPercentage: 0.8,

        borderWidth: 2,
        minBarLength: 1,
        label: "Base Stats (out of 255)",
        borderColor: "#fc0352",
        backgroundColor: "#fc035240",
        fill: true,
        data: [...statArray],
      },
    ],
  };

  return data;
};
const optionsRadar = {
  responsive: true,
  scale: {
    ticks: {
      beginAtZero: true,
      max: 255,
      min: 1,
    },
  },
};

const optionsBar = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    offset: false,

    xAxes: [
      {
        gridLines: {
          offsetGridLines: true,
        },
        ticks: {
          min: 1,
          max: 300,
          beginAtZero: true,
        },
      },
    ],
  },
  title: {
    display: true,
    text: "Base Stats of the Species",
  },
};
export const Chart = (props) => (
  <Radar options={optionsRadar} data={convertStatToData(props.data)} />
);

export const ChartMobile = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.barGraph}>
      <HorizontalBar
        options={optionsBar}
        data={convertStatToDataMobile(props.data)}
      />
    </div>
  );
};
