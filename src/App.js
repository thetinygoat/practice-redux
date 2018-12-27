import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./Components/Counter/Counter";

class App extends Component {
  render() {
    return (
      <div>
        <Counter
          counter={this.props.ctr}
          inc={this.props.handleIncrement}
          dec={this.props.handleDecrement}
          add={this.props.handleAdd}
          sub={this.props.handleSub}
        />
        <button>Add result</button>
        <ul />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    res: state.res.results
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => dispatch({ type: "INCREMENT" }),
    handleDecrement: () => dispatch({ type: "DECREMENT" }),
    handleAdd: () => dispatch({ type: "ADD", value: 5 }),
    handleSub: () => dispatch({ type: "SUB", value: 5 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
