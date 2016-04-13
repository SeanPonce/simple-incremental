import React from 'react';

export default class Upgrade extends React.Component {
  render() {
		let {upgrade, id, onBuyUpgrade} = this.props;
    if ( upgrade.purchased ) {
      return (
        <tr>
          <td>{upgrade.name}</td>
          <td>
            ${upgrade.price}
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{upgrade.name}</td>
          <td>
            <button className="btn btn-info" onClick={(id) => (onBuyUpgrade(id))}>${upgrade.price}</button>
          </td>
        </tr>
      );
    }
  }
}
