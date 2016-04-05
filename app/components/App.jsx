import React from 'react';
import ResourceList from './ResourceList';
import UpgradeList from './UpgradeList';
import {connect} from 'react-redux';
import {addResource, buyUpgrade, sellResource} from "../actions/Actions.js";

@connect((state) => {
  const gameData = state.gameData;
  return {
  money: gameData.get('money'),
  upgrades: gameData.get('upgrades'),
  resources: gameData.get('resources')
  }
}, {
  addResource,
  buyUpgrade,
  sellResource
})
export default class App extends React.Component {
  render() {
    const {resources, upgrades, addResource, buyUpgrade, sellResource,
      money} = this.props;
    return (
      <div className="container">
        <h3>Simple Incremental Game</h3>
        <h5>${money}</h5>
        <ResourceList
          resources={resources}
          onResourceAdd={addResource}
          onResourceSell={sellResource} />
        <UpgradeList
          upgrades={upgrades}
          onBuyUpgrade={buyUpgrade} />
      </div>
    );
  }
}
