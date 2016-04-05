import React from 'react';

export default class Resource extends React.Component {
  render() {
		let {resource, dispatch, id, onResourceAdd, onResourceSell} = this.props;
    return (
        <tr>
          <td>
          <button className="button-primary" onClick={(id) => (onResourceAdd(id))}>+{resource.name}</button>
          </td>
          <td><div className="two columns">Progress</div></td>
          <td>{resource.amount}</td>
          <td><button className="button-primary" onClick={(id) => (onResourceSell(id))}>{resource.price}</button></td>
        </tr>
    );
  }
}
