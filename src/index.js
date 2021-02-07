import React from "react";
import ReactDOM from "react-dom";
import Exercises from "./pages/Exercises";

const container = document.getElementById("root");
// ReactDOM.render(__QUE, __Donde);
ReactDOM.render(<Exercises />, container);
/*ReactDOM.render(
  <div>
    <Welcome username="Nacho" />
    <Card
      title="Aca va un Titulo"
      description="Escribir una reseña"
      leftColor="#a74cf2"
      rightColor="#617bfb"
    />
  </div>,
  container
);*/
