import React from 'react';

export default class Upgrade extends React.Component {
  render() {
		let {upgrade, id, onBuyUpgrade} = this.props;
    if ( upgrade.purchased ) {
      return (
        <div className="Upgrade">
          <button className="btn btn-default">{upgrade.name}</button>
        </div>
      );
    } else {
      return (
        <div className="Upgrade">
          <button className="btn btn-info" onClick={(id) => (onBuyUpgrade(id))}>{upgrade.name} - ${upgrade.price}</button>
        </div>
      );
    }
  }
}
