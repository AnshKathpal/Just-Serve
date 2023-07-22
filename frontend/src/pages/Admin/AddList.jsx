import React, { useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import { AdminSidebar } from "../../Components/AdminComponents/AdminSidebar";
import { useDispatch } from "react-redux";
import { postVolunteers } from "../../Redux/AdminReducer/action";

export const AddList = () => {
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
    setVolunteers({...volunteers, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postVolunteers(volunteers));
    
    setVolunteers(initialState)
    alert("Data added")
    console.log(volunteers);
  };

  return (
    <>
      <Text fontSize="4xl">Add Volunteer Opprtinuties</Text>

      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid red",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          textAlign: "left",
          placeItems: "center",
          height: "700px",
          margin: "40px auto",
        }}
      >
        <div>
          <label>Name of Organisation</label>
          <br />
          <input
            name="name"
            value={volunteers.name}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange = {handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
            }}
          />
        </div>

        <div>
          <label>Description</label>
          <br />
          <input
            name="description"
            value={volunteers.description}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange = {handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Role</label>
          <br />
          <input
            name="role"
            value={volunteers.role}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange = {handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Work Type</label>
          <br />
          <input
            name="typeofwork"
            value={volunteers.typeofwork}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange = {handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Location</label>
          <br />
          <select
            name="location"
            value={volunteers.location}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange = {handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
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
          <label>Image</label>
          <br />
          <input
            name="image"
            value={volunteers.image}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange = {handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
            }}
            type="text"
            // accept="image/*"
          />
        </div>

        <div>
          <label>Posted on</label>
          <br />
          <input
            name="updated"
            value={volunteers.updated}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange = {handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Start Date</label>
          <br />
          <input
            name="start_date"
            value={volunteers.start_date}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange = {handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
            }}
            type="datetime-local"
          />
        </div>

        <div>
          <label>End Data</label>
          <br />
          <input
            name="end_date"
            value={volunteers.end_date}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange = {handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
            }}
            type="datetime-local"
          />
        </div>

        <div>
          <label>Schedule</label>
          <br />
          <input
            name="schedule"
            value={volunteers.schedule}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange = {handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Address</label>
          <br />
          <textarea
            name="address"
            value={volunteers.address}
            // onChange={(e) => setVolunteers(e.target.value)}
            onChange = {handleChange}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
            }}
            type="text"
          />
        </div>

        <input type="submit" />
      </form>
      {/* </Box> */}
    </>
  );
};
