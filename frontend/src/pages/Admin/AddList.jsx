import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { AdminSidebar } from "../../Components/AdminComponents/AdminSidebar";

export const AddList = () => {
  return (
    <>
      <Text fontSize="4xl">Add Volunteer Opprtinuties</Text>

      {/* <Box
        border="1px solid blue"
        width="80%"
        margin="40px auto"
        padding="30px"
        height="700px"
      > */}
        <form
          style={{
            border: "1px solid red",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            textAlign: "left",
            placeItems: "center",
            width : "70%",
            height : "700px",
            margin : "40px auto"
          }}
        >
          <div>
            <label >Name of Organisation</label>
            <br />
            <input
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                fontSize : "large",
              }}
            />
          </div>

          {/* <br /> */}

          <div>
            <label>Description</label>
            <br />
            <input
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                fontSize : "large",
              }}
              type="text"
            />
          </div>

          <div>
            <label>Role</label>
            <br />
            <input
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                fontSize : "large",
              }}
              type="text"
            />
          </div>

          

          {/* <br /> */}

          {/* <br /> */}

          {/* <br /> */}

          <div>
            <label>Work Type</label>
            <br />
            <input
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                fontSize : "large",
              }}
              type="text"
            />
          </div>

          <div>
            <label>Location</label>
            <br />
            <select
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                fontSize : "large",
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
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                fontSize : "large",
              }}
              type="file"
              accept="image/*"
            />
          </div>

          {/* <br /> */}

         

          {/* <br /> */}

          <div>
            <label>Posted on</label>
            <br />
            <input
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                fontSize : "large",
              }}
              type="text"
            />
          </div>

          {/* <br /> */}

          <div>
            <label>Start Date</label>
            <br />
            <input
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                fontSize : "large",
              }}
              type="datetime-local"
            />
          </div>

          {/* <br /> */}

          <div>
            <label>End Data</label>
            <br />
            <input
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
              }}
              type="datetime-local"
            />
          </div>

          {/* <br /> */}

          <div>
            <label>Schedule</label>
            <br />
            <input
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                fontSize : "large",
              }}
              type="text"
            />
          </div>

          {/* <br /> */}

          {/* <div>
            <label>Time Commitment</label>
            <br />
            <input
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                fontSize : "large",
              }}
              type="text"
            />
          </div> */}

          {/* <br /> */}

          {/* <div>
            <label>Recurrence</label>
            <br />
            <input
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                fontSize : "large",
              }}
              type="text"
            />
          </div> */}

          {/* <br /> */}

          <div>
            <label>Address</label>
            <br />
            <textarea
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "5px",
                fontSize : "large",
              }}
              type="text"
            />
          </div>


        </form>
      {/* </Box> */}
    </>
  );
};
