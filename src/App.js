import React, { Component } from "react";
import firebase from "./firebase";

class App extends Component {
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
        console.log("Token : ", token);
      })
      .catch(() => {
        console.log("Error");
      });
  }
  render() {
    return <div></div>;
  }
}

export default App;
