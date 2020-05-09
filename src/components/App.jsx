import React, { Component } from "react";
import debounce from "../helpers/UtilityFunctions";

// c3

class App extends Component {
  constructor(props) {
    super(props);

    this.count = 0;
    this.getData = this.getData.bind(this);
    this.getDataOptimized = this.getDataOptimized.bind(this);
  }

  getData() {
    console.log('Call Back-end', this.count++);
  }

  getDataOptimized = debounce(value => {
    this.getData();
  }, 500)

  render() {
    return (
      <div>
        <input type="text" onChange={this.getDataOptimized} />
      </div>
    );
  }
}

export default App;
