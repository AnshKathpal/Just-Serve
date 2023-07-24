import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const OurVolunteer = () => {
  const mapData = useSelector((store) => store.adminReducer.volunteers.data);
  console.log(mapData, "mapdata");

  let locationCounts = {};

  if (mapData && Array.isArray(mapData)) {
    for (const item of mapData) {
      const location = item.location;
      if (locationCounts[location]) {
        locationCounts[location]++;
      } else {
        locationCounts[location] = 1;
      }
    }
    console.log("loc", locationCounts);
  }

  const expectedData = [
    ["Country", "Popularity"],
    ...Object.entries(locationCounts).map(([country, students]) => [
      country,
      students,
    ]),
  ];
  console.log(expectedData);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedTableData = JSON.parse(localStorage.getItem("AppliedData"));
    if (Array.isArray(storedTableData)) {
      setTableData(storedTableData);
    }
  }, []);

  function generateRandomThreeDigitNumber() {
    // Generate a random number between 0 and 999 (inclusive)
    const randomNumber = Math.floor(Math.random() * 1000);

    // Ensure the number is 3 digits long
    const threeDigitNumber = String(randomNumber).padStart(3, "0");

    return threeDigitNumber;
  }

  return (
    <div>
      <Box>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Application Id</Th>
                <Th>Full Name</Th>
                <Th>Email</Th>
                <Th>Contact</Th>
                <Th>City</Th>
                <Th>Country</Th>
                <Th>Application Status</Th>
              </Tr>
            </Thead>

            {tableData.length > 0 &&
              tableData.map((el) => (
                <Tbody key={el.appId}>
                  <Tr>
                    <Td>{"#" + generateRandomThreeDigitNumber()}</Td>
                    <Td>{el.firstname + " " + el.lastname}</Td>
                    <Td>{el.email}</Td>
                    <Td>{el.contact}</Td>
                    <Td>{el.city}</Td>
                    <Td>{el.country}</Td>
                    <Td>
                      <Button>Cancel Application</Button>
                    </Td>
                  </Tr>
                </Tbody>
              ))}
          </Table>
        </TableContainer>
      </Box>

      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = expectedData[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={expectedData}
        options={{
          colorAxis: {
            colors: ["yellow", "orange", "red"], // Set custom colors for the chart
          },
        }}
      />
    </div>
  );
};
