import React from 'react';
import Upgrade from './Upgrade.jsx';

export default class UpgradeList extends React.Component {
		render() {
				let {upgrades, onBuyUpgrade} = this.props;
				return (
						<div className="UpgradeList">
              {upgrades.map(upgrade =>
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
