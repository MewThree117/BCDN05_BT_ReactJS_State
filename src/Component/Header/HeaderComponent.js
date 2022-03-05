import React, { Component } from "react";
import "./Header.css";

export default class HeaderComponent extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__content p-3">TRY GLASSES APP ONLINE</div>
        </div>
      </header>
    );
  }
}
