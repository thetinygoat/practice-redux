import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./Components/Counter/Counter";

class App extends Component {
  render() {
    return (
      <div>
        <Counter counter={this.props.ctr} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

export default connect(mapStateToProps)(App);
