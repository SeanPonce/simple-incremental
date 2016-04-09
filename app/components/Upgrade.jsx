import React from 'react';

export default class Upgrade extends React.Component {
  render() {
		let {upgrade, id, onBuyUpgrade} = this.props;
    if ( upgrade.purchased ) {
      return (
        <div className="Upgrade">
          <button className="">{upgrade.name}</button>
        </div>
      );
    } else {
      return (
        <div className="Upgrade">
          <button className="button-primary" onClick={(id) => (onBuyUpgrade(id))}>Buy {upgrade.name} - ${upgrade.price}</button>
        </div>
      );
    }
  }
}
