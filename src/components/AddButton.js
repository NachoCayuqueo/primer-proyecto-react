import React from "react";
import "./styles/AddButton.css";
import buttonImg from "../images/add.png";
import { Link } from "react-router-dom";

const AddButton = () => (
  <Link to="/exercise/new">
    <img src={buttonImg} className="Fitness-Add" />
  </Link>
);

/*
Es lo mismo a esto
function AddButton(props) {
  return (
    <Link to="/exercise/new">
      <img src={buttonImg} className="Fitness-Add" />
    </Link>
  );
}*/

export default AddButton;
