import React from "react";
import exerciseImg from "../images/exercise.png";
import circlesImg from "../images/circles.png";
import homeroImg from "../images/homero.jpeg";
import "./styles/Card.css";

class Card extends React.Component {
  render() {
    const { title, description, img, leftColor, rightColor } = this.props;
    return (
      <div
        class="card Fitness-Card"
        style={{
          backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`,
        }}
      >
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src={img} />
              </figure>
            </div>
            <div class="media-content Fitness-Card-Info">
              <h1 class="title is-4">{title}</h1>
              <p class="subtitle is-6">{description}</p>
            </div>
          </div>
        </div>
      </div>

      /*
      <div className="card Fitness-Card">
        <div>
          <div className="columns is-centered">
            <div className="column is-2">
              <img src={exerciseImg} />
            </div>
            <div className="column is-2 Fitness-Card-Info">
              <h1>Aca va un Titulo</h1>
              <p> Información sobre la pagina</p>
            </div>
          </div>
        </div>
      </div>*/
    );
  }
}

export default Card;
