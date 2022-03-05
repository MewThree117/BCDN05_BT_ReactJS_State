import React, { Component } from "react";
import "./Model.css";

export default class ModelComponent extends Component {
  render() {
    let { currentGlasses } = this.props;
    return (
      <div className="container py-4">
        <div className="model__list">
          <div
            className="model__item"
            style={{ backgroundImage: "url(./Image/glassesImage/model.jpg)" }}
          >
            <img src={currentGlasses} alt="" />
          </div>
          <div
            className="model__item"
            style={{ backgroundImage: "url(./Image/glassesImage/model.jpg)" }}
          ></div>
        </div>
      </div>
    );
  }
}
