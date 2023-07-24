import React, { useState } from "react";
import { Text, Box, Button, useToast } from "@chakra-ui/react";
import { AdminSidebar } from "../../Components/AdminComponents/AdminSidebar";
import { useDispatch } from "react-redux";
import { postVolunteers } from "../../Redux/AdminReducer/action";
import { color } from "framer-motion";


export const AdminNew = () => {

  const toast = useToast()

  let initialState = {
    name: "",
    image : "",
    description: "",
    role: "",
    designation: "",
    email: "",
    contactNo: "",
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
      title: 'Admin Added',
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'top',
    })
    console.log(volunteers);
  };



  return (
    <>
    <Text  fontSize="4xl" fontWeight="bold">Register New Admin</Text>

    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
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
          Name of Admin
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
          Image
        </label>
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
          Designation
        </label>
        <br />
        <input
          name="designation"
          value={volunteers.designation}
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
          Email Id
        </label>
        <br />
        <input
          name="email"
          value={volunteers.email}
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
        <label style={{ fontSize: "16px", fontWeight: "bold" }}>Contact No.</label>
        <br />
        <input
          name="contactNo"
          value={volunteers.contactNo}
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

  
<Button type="submit" fontSize="large" bgColor={"rgb(15,115,227)"} _hover = {{
  bg : "rgb(15,115,227)"
}} color={"white"}>
        Register New Admin
      </Button>

    </form>
    {/* </Box> */}
  </>
  )
}
