import React from 'react';
import ResourceList from './ResourceList';
import UpgradeList from './UpgradeList';
import {connect} from 'react-redux';

@connect((state) => {
  const gameData = state.gameData;
  return {
  money: gameData.get('money'),
  }
})
export default class App extends React.Component {
  render() {
    const {resources, resourceData, upgrades, money,
      addResource, buyUpgrade, sellResource} = this.props;
    return (
      <div className="container">
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
}
