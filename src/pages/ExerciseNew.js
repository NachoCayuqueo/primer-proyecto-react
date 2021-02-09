import React from "react";
import Exercises from "./Exercises";

class ExercisesNew extends React.Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <input
              type="text"
              className="control"
              placeholder="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className="field">
            <input
              type="text"
              className="control"
              placeholder="description"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
          <div className="field">
            <input
              type="text"
              className="control"
              placeholder="img"
              name="img"
              onChange={this.handleChange}
              value={this.state.img}
            />
          </div>
          <div className="field is-grouped">
            <div className="control">
              <input
                type="text"
                className="control"
                placeholder="leftColor"
                name="leftColor"
                onChange={this.handleChange}
                value={this.state.leftColor}
              />
            </div>
            <div className="control">
              <input
                type="text"
                className="control"
                placeholder="rightColor"
                name="rightColor"
                onChange={this.handleChange}
                value={this.state.rightColor}
              />
            </div>
          </div>

          <button type="submit" className="button is-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ExercisesNew;
