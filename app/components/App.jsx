import React from 'react';
import ResourceList from './ResourceList';
import {connect} from 'react-redux';

 @connect((state) => ({
   credits: state.get('credits'),
   resources: state.resources
}))
export default class App extends React.Component {
  render() {
    let {dispatch, credits} = this.props;
    console.log("credits: " + Object.keys(credits));
    return (
      <div className="container">
        <h1>Simple Incremental Game</h1>
        <p>{credits}</p>
        <ResourceList />
      </div>
    );
  }
}
