import React, { useState } from "react";
import { Text, Box, Button, useToast } from "@chakra-ui/react";
import { AdminSidebar } from "../../Components/AdminComponents/AdminSidebar";
import { useDispatch } from "react-redux";
import { postVolunteers } from "../../Redux/AdminReducer/action";
import { color } from "framer-motion";

export const AddList = () => {

  const toast = useToast()

  let initialState = {
    name: "",
    description: "",
    role: "",
    location: "",
    typeofwork: "",
    updated: "",
    start_date: "",
    end_date: "",
    image: "",
    schedule: "",
    address: "",
  };

  const dispatch = useDispatch();

  const [volunteers, setVolunteers] = useState(initialState);

  const handleChange = (e) => {
    setVolunteers({ ...volunteers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postVolunteers(volunteers));

    setVolunteers(initialState);
    toast({
      title: 'Organisation Added',
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'top',
    })
    console.log(volunteers);
  };

  return (
    <>
      <Text  fontSize="4xl" fontWeight="bold">Add Volunteer Opportunities</Text>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          textAlign: "left",
          placeItems: "center",
          height: "700px",
          margin: "40px auto",
          boxShadow:
            "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
        }}
      >
        <div>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>
            Name of Organisation
          </label>
          <br />
          <input
            name="name"
            value={volunteers.name}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange={handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              backgroundColor: "#e3e6eb",
              padding: "5px",
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>
            Description
          </label>
          <br />
          <input
            name="description"
            value={volunteers.description}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange={handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              backgroundColor: "#e3e6eb",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        <div>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>Role</label>
          <br />
          <input
            name="role"
            value={volunteers.role}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange={handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              backgroundColor: "#e3e6eb",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        <div>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>
            Work Type
          </label>
          <br />
          <input
            name="typeofwork"
            value={volunteers.typeofwork}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange={handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              backgroundColor: "#e3e6eb",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        <div>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>
            Location
          </label>
          <br />
          <select
            name="location"
            value={volunteers.location}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange={handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              backgroundColor: "#e3e6eb",
              padding: "5px",
            }}
          >
            <option value="">Select Location</option>
            <option value="Pune">Pune</option>
            <option value="Pune">Mumbai</option>
            <option value="Pune">Banglore</option>
            <option value="Pune">Delhi</option>
            <option value="Pune">Kolkata</option>
            <option value="Pune">Noida</option>
          </select>
        </div>

        <div>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>Image</label>
          <br />
          <input
            name="image"
            value={volunteers.image}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange={handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              backgroundColor: "#e3e6eb",
              padding: "5px",
            }}
            type="text"
            // accept="image/*"
          />
        </div>

        <div>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>
            Posted on
          </label>
          <br />
          <input
            name="updated"
            value={volunteers.updated}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange={handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              backgroundColor: "#e3e6eb",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        <div>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>
            Start Date
          </label>
          <br />
          <input
            name="start_date"
            value={volunteers.start_date}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange={handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              backgroundColor: "#e3e6eb",
              padding: "5px",
            }}
            type="datetime-local"
          />
        </div>

        <div>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>
            End Data
          </label>
          <br />
          <input
            name="end_date"
            value={volunteers.end_date}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange={handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              backgroundColor: "#e3e6eb",
              padding: "5px",
            }}
            type="datetime-local"
          />
        </div>

        <div>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>
            Schedule
          </label>
          <br />
          <input
            name="schedule"
            value={volunteers.schedule}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange={handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              backgroundColor: "#e3e6eb",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        <div>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>
            Address
          </label>
          <br />
          <textarea
            name="address"
            value={volunteers.address}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange={handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              backgroundColor: "#e3e6eb",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        {/* <input
          style={{
            backgroundColor: "rgb(15,115,217",
            width: "100px",
            height: "30px",
            color : "white"
          }}
          type="submit"
        /> */}

<Button type="submit" fontSize="large" bgColor={"rgb(15,115,227)"} color={"white"}>
          Add Organisation
        </Button>

      </form>
      {/* </Box> */}
    </>
  );
};
