import React, { Component } from "react";
import ModelComponent from "../Model/ModelComponent";
import ListProductComponent from "../Product/ListProductComponent";

export default class BodyComponent extends Component {
  state = {
    arrGlasses: [
      {
        id: "1",
        price: "30",
        name: "GUCCI G8850U",
        url: "./Image/glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: "2",
        price: "50",
        name: "GUCCI G8759H",
        url: "./Image/glassesImage/v2.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: "3",
        price: "30",
        name: "DIOR D6700HQ",
        url: "./Image/glassesImage/v3.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: "4",
        price: "70",
        name: "DIOR D6005U",
        url: "./Image/glassesImage/v4.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: "5",
        price: "40",
        name: "PRADA P8750",
        url: "./Image/glassesImage/v5.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: "6",
        price: "60",
        name: "PRADA P9700",
        url: "./Image/glassesImage/v6.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: "7",
        price: "80",
        name: "FENDI F8750",
        url: "./Image/glassesImage/v7.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: "8",
        price: "10",
        name: "FENDI F8500",
        url: "./Image/glassesImage/v8.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: "9",
        price: "60",
        name: "FENDI F4300",
        url: "./Image/glassesImage/v9.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    ],

    currentGlasses: "./Image/glassesImage/v1.png",
  };

  changeGlasses = (glass) => {
    let showGlass = this.state.arrGlasses;
    showGlass = showGlass.find((item) => item.id == glass.id);
    this.setState({
      currentGlasses: showGlass.url,
    });
  };

  render() {
    return (
      <div>
        <ModelComponent
          currentGlasses={this.state.currentGlasses}
          changeGlasses={this.changeGlasses}
        />
        <ListProductComponent
          arrGlasses={this.state.arrGlasses}
          changeGlasses={this.changeGlasses}
        />
      </div>
    );
  }
}
