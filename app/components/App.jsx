import React from 'react';
//import {connect} from 'react-redux';

// @connect((state) => ({
//   messages: state.messages
// }))
export default class App extends React.Component {
  render() {
    let {dispatch} = this.props;
    return (
      <div className="App">
        <h1>Simple Incremental Game</h1>
      </div>
    );
  }
}
