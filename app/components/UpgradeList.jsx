import React from 'react';
import Upgrade from './Upgrade.jsx';
import {connect} from 'react-redux';
import {buyUpgrade} from "../actions/Actions.js";

@connect((state) => {
  const gameData = state.gameData;
  return {
	money: gameData.get('money'),
  upgrades: gameData.get('upgrades')
  }
}, {
  buyUpgrade,
})
export default class UpgradeList extends React.Component {
		render() {
				let {money, upgrades, buyUpgrade, filter} = this.props;
				const filteredUpgrades = upgrades.filter((upgrade) => {
					if ( filter === 'available' ) {
						return (!upgrade.get('purchased') && upgrade.get('price')*0.5 <= money);
					}
					else if ( filter === 'purchased' ) {
						return (upgrade.get('purchased'));
					}
					return false;
				});
				if ( filteredUpgrades.size === 0 ) {
						return <emph>None {filter}.</emph>
				} else {
					return (
							<div className="UpgradeList">
								{filteredUpgrades.valueSeq().map(upgrade =>
									<Upgrade
										id ={upgrade.get('id')}
										key={upgrade.get('id')}
										upgrade={upgrade.toJS()}
	                  onBuyUpgrade={buyUpgrade.bind(null, upgrade.get('id'))} />
							)}
							</div>
					);
				}
		}
}
