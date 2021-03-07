import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import "./Home.css";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:5000/testing")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="Products">
        <div className="lander">
          <h1>Products page</h1>
          <p>A simple app showing react button click navigation</p>
          <p className="App-intro">{this.state.apiResponse}</p>

        </div>
      </div>
    );
  }
}
