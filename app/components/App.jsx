import React from 'react';
import ResourceList from './ResourceList';
import UpgradeList from './UpgradeList';
import {connect} from 'react-redux';
import {updateProgress} from '../actions/Actions.js';

@connect((state) => {
  const gameData = state.gameData;
  return {
  money: gameData.get('money'),
  }
}, {
  updateProgress
})
export default class App extends React.Component {
  render() {
    requestAnimationFrame(this.GameLoop);
    const {resources, resourceData, upgrades, money,
      addResource, buyUpgrade, sellResource} = this.props;
    return (
      <div className="well well-lg">
        <h3>Simple Incremental Game</h3>
        <h5>${money}</h5>
        <ResourceList />
        <h5>Available Upgrades</h5>
        <UpgradeList
          filter='available' />
        <h5>Purchased Upgrades</h5>
          <UpgradeList
            filter='purchased' />
      </div>
    );
  }

  // Game loop stuff
  // MIN_INTERVAL = 1000 / 10; // We only need 10 fps
  MIN_INTERVAL = 1000 / 10; // We only need 10 fps
  MAX_INTERVAL = 1000 * 5;  // Slows is 0.2 fps
  getTime() {
    return window.performance.now();
  }

  prevTime = this.getTime();
  GameLoop = () => {
    const {updateProgress} = this.props;
    const current = this.getTime();
    const delta = current - this.prevTime;

    if ( delta < this.MIN_INTERVAL || delta > this.MAX_INTERVAL ) {
      requestAnimationFrame(this.GameLoop);
      return;
    }

    this.prevTime = current;
    updateProgress();

    requestAnimationFrame(this.GameLoop);
    return;
  };
  // Game loop here
}
