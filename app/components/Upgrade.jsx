import React from 'react';

export default class Upgrade extends React.Component {
  render() {
		let {upgrade, id, onBuyUpgrade} = this.props;
    var className = upgrade.enabled ? "button-primary" : "";
    return (
      <div className="Upgrade">
        <button className={className} onClick={(id) => (onBuyUpgrade(id))}>Buy {upgrade.name}</button>
      </div>
    );
  }
}
