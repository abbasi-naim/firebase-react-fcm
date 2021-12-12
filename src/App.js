import React, { Component } from "react";
import firebase from "./firebase";
import "./App.css";
import logo from "./firebase.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        if (token) console.log("Token is: ", token);
      })
      .catch(() => {
        console.log("Error");
      });
  }
  render() {
    return (
      <div>
        <h2>This is my first fcm notification</h2>;
        <img src={logo} alt="Firebase Logo" />
        <a href="https://www.linkedin.com/in/naim-abbasi-darab/">My Linkedin</a>
      </div>
    );
  }
}
