import React, { useEffect, useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editVolunteers } from "../../Redux/AdminReducer/action";

export const EditSinglePage = () => {
  const { id } = useParams();
  console.log("id", id);
  const editVolunteer = useSelector(
    (store) => store.adminReducer.volunteers.data
  );
  console.log(editVolunteer, "edit");

  const dispatch = useDispatch();

  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("");
  const [typeofwork, setTypeOfWork] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [updated, setUpdate] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [schedule, setSchedule] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const data = editVolunteer.find((ele) => ele._id === id);
    setData(data);
    setName(data.name);
    setDescription(data.description);
    setRole(data.role);
    setTypeOfWork(data.typeofwork);
    setLocation(data.location);
    setImage(data.image);
    setUpdate(data.updated);
    setStartDate(data.start_date);
    setEndDate(data.end_date);
    setSchedule(data.schedule);
    setAddress(data.address);
  }, [editVolunteer, id]);

  function handleEdit() {
    if (
      name &&
      description &&
      location &&
      role &&
      typeofwork &&
      image &&
      updated &&
      start_date &&
      end_date &&
      schedule &&
      address
    ) {
      let obj = {
        name: name,
        description: description,
        role: role,
        typeofwork: typeofwork,
        location: location,
        image: image,
        updated: updated,
        start_date: start_date,
        end_date: end_date,
        schedule: schedule,
        address: address,
      };
      dispatch(editVolunteers(data._id, obj));
    } else {
      console.log("error");
    }
  }

  console.log(data, "Data");

  return (
    <>
      <Text fontSize="4xl">Edit Volunteer Opprtinuties</Text>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit();
        }}
        style={{
          border: "1px solid red",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          textAlign: "left",
          placeItems: "center",
          width: "70%",
          height: "700px",
          margin: "40px auto",
        }}
      >
        <div>
          <label>Name of Organisation</label>
          <br />
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              padding: "5px",
            }}
          />
        </div>

        <div>
          <label>Description</label>
          <br />
          <input
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Role</label>
          <br />
          <input
            value={role}
            name="role"
            onChange={(e) => setRole(e.target.value)}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Work Type</label>
          <br />
          <input
            value={typeofwork}
            onChange={(e) => setTypeOfWork(e.target.value)}
            name="typeofwork"
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Location</label>
          <br />
          <select
            value={location}
            name="location"
            onChange={(e) => setLocation(e.target.value)}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              padding: "5px",
            }}
          >
            <option value="">Select Location</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Banglore">Banglore</option>
            <option value="Delhi">Delhi</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Noida">Noida</option>
          </select>
        </div>

        <div>
          <label>Image</label>
          <br />
          <input
            value={image}
            name="image"
            onChange={(e) => setImage(e.target.value)}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Posted on</label>
          <br />
          <input
            value={updated}
            name="updated"
            onChange={(e) => setUpdate(e.target.value)}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Start Date</label>
          <br />
          <input
            value={start_date}
            name="start_date"
            onChange={(e) => setStartDate(e.target.start_date)}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              padding: "5px",
            }}
            type="datetime-local"
          />
        </div>

        <div>
          <label>End Data</label>
          <br />
          <input
            value={end_date}
            name="end_date"
            onChange={(e) => setEndDate(e.target.end_date)}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              padding: "5px",
            }}
            type="datetime-local"
          />
        </div>

        <div>
          <label>Schedule</label>
          <br />
          <input
            value={schedule}
            name="schedule"
            onChange={(e) => setSchedule(e.target.value)}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Address</label>
          <br />
          <textarea
            value={address}
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "5px",
              fontSize: "large",
              padding: "5px",
            }}
            type="text"
          />
        </div>

        <input type="submit" />
      </form>
    </>
  );
};
