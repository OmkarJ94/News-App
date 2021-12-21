import React, { Component } from "react";
import Loader from "./loader.gif";
export default class spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loader} alt="loading" />
      </div>
    );
  }
}
