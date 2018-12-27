import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  add,
  sub,
  addResult,
  deleteResult
} from "./store/actions/actions";
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
    handleIncrement: () => dispatch(increment()),
    handleDecrement: () => dispatch(decrement()),
    handleAdd: () => dispatch(add({ value: 5 })),
    handleSub: () => dispatch(sub({ value: 5 })),
    handleResAdd: result => dispatch(addResult({ value: result })),
    handleResDel: id => dispatch(deleteResult({ id: id }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
