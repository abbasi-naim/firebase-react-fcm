import React, { Component } from "react";
import firebase from "./firebase";

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
        console.warn("Token : ", token);
      })
      .catch(() => {
        console.log("Error");
      });
  }
  render() {
    return <div>this is my first fcm notification.</div>;
  }
}
