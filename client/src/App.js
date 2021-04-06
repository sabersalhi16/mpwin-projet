// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from "react";

class App extends React.Component {
  state = { activeIndex: true };
  onClick() {
    this.setState({ activeIndex: !this.state.activeIndex });
  }
  render() {
    console.log(this.state.activeIndex);

    return (
      <div onClick={this.onClick.bind(this)}>
        {this.state.activeIndex ? "Test" : null}
      </div>
    );
  }
}
export default App;
