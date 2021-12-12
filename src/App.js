import React, { Component } from "react";
import firebase from "./firebase";
import "./App.css";

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
        if (token) console.log("Token : ", token);
      })
      .catch(() => {
        console.log("Error");
      });
  }
  render() {
    return <h2>This is my first fcm notification</h2>;
  }
}
