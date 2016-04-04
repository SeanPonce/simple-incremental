import React from 'react';
import ResourceList from './ResourceList';
import {connect} from 'react-redux';
import {addResource} from "../actions/Actions.js";

@connect((state) => {
  const gameData = state.gameData;
  return {
  credits: gameData.get('credits'),
  resources: gameData.get('resources')
  }
}, {
  addResource
})
export default class App extends React.Component {
  render() {
    const {resources, addResource, credits} = this.props;
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
