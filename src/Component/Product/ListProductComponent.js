import React, { Component } from "react";
import "./Product.css";

export default class ListProductComponent extends Component {
  handleClickGlasses = (glass) => {
    this.props.changeGlasses(glass);
  };

  render() {
    let { arrGlasses } = this.props;
    // console.log(arrGlasses);
    return (
      <div className="container">
        <div className="glasses__list p-3 mt-3">
          {arrGlasses.map((item, index) => {
            return (
              <div className="glasses__item" key={index}>
                <img
                  src={item.url}
                  alt=""
                  onClick={() => this.handleClickGlasses(item)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
