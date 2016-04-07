import React from 'react';
import Upgrade from './Upgrade.jsx';

export default class UpgradeList extends React.Component {
		render() {
				let {upgrades, onBuyUpgrade, filter} = this.props;
				const filteredUpgrades = upgrades.filter((upgrade) => upgrade.get('state') === filter);
				if ( filteredUpgrades.size === 0 ) {
						return <emph>None {filter}.</emph>
				} else {
					return (
							<div className="UpgradeList">
								{filteredUpgrades.map(upgrade =>
									<Upgrade
										id ={upgrade.get('id')}
										key={upgrade.get('id')}
										upgrade={upgrade.toJS()}
	                  onBuyUpgrade={onBuyUpgrade.bind(null, upgrade.get('id'))} />
							)}
							</div>
					);
				}
		}
}
