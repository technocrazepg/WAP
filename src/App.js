import React, { Component } from "react";
import "./components/CloneStyles.css";
import Clone from "./components/Clone";
class App extends Component {
  render() {
    return (
      <div className="BG">
        <div className="backGreenBar"></div>
        <Clone />
      </div>
    );
  }
}

export default App;
