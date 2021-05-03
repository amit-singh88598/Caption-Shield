import { makeStyles } from "@material-ui/core";
import React from "react";
import Chart from "react-google-charts";

const useStyle = makeStyles((theme) => ({
  chart: {
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    maxWidth: 900,
  },
}));

export default function MyChart() {
  const classes = useStyle();

  return (
    <div>
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["x", "dogs"],
          [0, 0],
          [1, 25],
          [2, 100],
          [3, 17],
          [4, 18],
          [5, 9],
          [6, 11],
          [7, 27],
          [8, 33],
          [9, 40],
          [10, 32],
          [11, 35],
        ]}
        options={{
          hAxis: {
            title: "Time",
          },
          vAxis: {
            title: "Popularity",
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}
