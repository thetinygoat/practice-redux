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
        <button onClick={() => this.props.handleResAdd(this.props.ctr)}>
          Add result
        </button>
        <ul>
          {this.props.res.map(r => (
            <li key={r.id} onClick={() => this.props.handleResDel(r.id)}>
              {r.value}
            </li>
          ))}
        </ul>
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
    handleSub: () => dispatch({ type: "SUB", value: 5 }),
    handleResAdd: result => dispatch({ type: "ADD_RESULT", value: result }),
    handleResDel: id => dispatch({ type: "DELETE_RESULT", id: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
