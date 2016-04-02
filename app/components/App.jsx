import React from 'react';
import ResourceList from './ResourceList';
import {connect} from 'react-redux';
import {addResource} from "../actions/Actions.js";

@connect((state) => ({
  credits: state.credits,
  resources: state.resources
}), {
  addResource
})
export default class App extends React.Component {
  render() {
    const {resources, addResource, credits} = this.props;
    console.log("credits: " + credits);
    return (
      <div className="container">
        <h1>Simple Incremental Game</h1>
        <p>{credits}</p>
        <ResourceList
          resources={resources}
          onResourceAdd={addResource} />
      </div>
    );
  }
}
