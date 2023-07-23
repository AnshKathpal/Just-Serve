import React from "react";

import { Chart } from "react-google-charts";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const OurVolunteer = () => {
  const mapData = useSelector((store) => store.adminReducer.volunteers.data);
  console.log(mapData);

  let locationCounts = [];

  if (mapData && Array.isArray(mapData)) {
    locationCounts = [];
    for (const item of mapData) {
      const location = item.location;
      if (locationCounts[location]) {
        locationCounts[location]++;
      } else {
        locationCounts[location] = 1;
      }
    }
    console.log(locationCounts);
  }

  return (
    <div>
      <Box>
        {/* <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = locationCounts[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={locationCounts}
      options={{
        colorAxis: {
          colors: ['yellow', 'orange', 'red'], // Set custom colors for the chart
        },
      }}
    /> */}
      </Box>
    </div>
  );
};
