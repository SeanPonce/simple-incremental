import React from 'react';

export default class Resource extends React.Component {
  render() {
		let {progress, amount, resource, dispatch, id, onStartProgress, onResourceSell} = this.props;
    return (
        <tr>
          <td>
          <button className="button-primary" onClick={(id) => (onStartProgress(id))}>+{resource.name}</button>
          </td>
          <td><div className="two columns"><progress value={progress.toFixed(0)} max="100"></progress></div></td>
          <td>{amount}</td>
          <td><button className="button-primary" onClick={(id) => (onResourceSell(id))}>{resource.price}</button></td>
        </tr>
    );
  }
}
