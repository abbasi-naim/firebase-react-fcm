import React, { Component } from "react";
import firebase from "./firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const messaging = firebase.messaging();
  }
  render() {
    return <div></div>;
  }
}

export default App;
