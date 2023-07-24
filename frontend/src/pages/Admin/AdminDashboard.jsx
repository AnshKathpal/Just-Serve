import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArcElement,Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

export const AdminDashboard = () => {
  const dataRequired = useSelector(
    (store) => store.adminReducer.volunteers.data
  );

  let locationCounts = {};
  let workType = {};

  if (dataRequired && Array.isArray(dataRequired)) {
    locationCounts = {};
    for (const item of dataRequired) {
      const location = item.location;
      if (locationCounts[location]) {
        locationCounts[location]++;
      } else {
        locationCounts[location] = 1;
      }
    }
    console.log(locationCounts);

    workType = { Remote: 0, Onsite: 0, Hybrid: 0 };
    for (const item of dataRequired) {
      const work = item.typeofwork;
      if (work === "Remote") {
        workType.Remote++;
      } else if (work === "Onsite") {
        workType.Onsite++;
      } else if (work === "Hybrid") {
        workType.Hybrid++;
      }
    }
    console.log(workType);
  } else {
    console.error(
      "Data required is not available or not in the expected format."
    );
  }

  const donChartLocation = {
    labels: ["Pune", "Delhi", "Mumbai", "Noida", "Banglore"],
    datasets: [
      {
        label: "# of Organisations",
        data: [
          locationCounts["Pune"] || 0,
          locationCounts["Delhi"] || 0,
          locationCounts["Mumbai"] || 0,
          locationCounts["Noida"] || 0,
          locationCounts["Bangalore"] || 0,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const donChartWorkType = {
    labels: ["Onsite", "Hybrid", "Remote"],
    datasets: [
      {
        label: "# of Work Type",
        data: [
          workType["Onsite"] || 0,
          workType["Hybrid"] || 0,
          workType["Remote"] || 0,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };


  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


  const getRandomData = (count, min, max) => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.random() * (max - min) + min;
      data.push(randomNumber);
    }
    return data;
  };

  const labelsFaker = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7'];

  const dataLine = {
    labels,
    datasets: [
      {
        label: 'OnSite Volunteers',
        data: getRandomData(labelsFaker.length, -1000, 1000),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Hybrid Volunteers',
        data: getRandomData(labelsFaker.length, -1000, 1000),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'Remote Volunteers',
        data: getRandomData(labelsFaker.length, -1000, 1000),
        borderColor: 'rgb(39, 100, 12)',
        backgroundColor: 'rgba(149, 202, 113, 0.5)',
        yAxisID: 'y2',
      },
    ],
  };


  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const storedTableData = JSON.parse(localStorage.getItem("AppliedData"));
    if (Array.isArray(storedTableData)) {
      setTableData(storedTableData);
    }
  }, []);

  console.log(tableData,"dataaa")

  let appliedCounts = {};
  if (tableData && Array.isArray(tableData)) {
    appliedCounts = {};
    for (const item of tableData) {
      const applied = item.city;
      if (appliedCounts[applied]) {
        appliedCounts[applied]++;
      } else {
        appliedCounts[applied] = 1;
      }
    }
    console.log(appliedCounts, "applied count");
  }


  return (
    <>
      <Flex justifyContent="space-evenly">
        {donChartLocation && (
          <Box border="1px solid red" width="30%">
            <Doughnut data={donChartLocation} />
            <Text fontWeight="bold" mt="10px" >Our Organisations Data</Text>
          </Box>
        )}

        {donChartWorkType && (
          <Box border="1px solid red" width="30%">
            <Doughnut data={donChartWorkType} />
            <Text fontWeight="bold" mt="10px" >Our Work Type Data</Text>
          </Box>
        )}
      </Flex>

<Box p="20px" height="auto" boxShadow=" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;" backgroundColor="white" width="90%" m="40px auto 0px ">
  <Text fontSize="xl" fontWeight="bold" textAlign="center">
    Volunteers Data By Month
  </Text>
<Line options={options} data={dataLine} />
</Box>
      

    </>
  );
};
