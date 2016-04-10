import React from 'react';

export default class Resource extends React.Component {
  render() {
		let {progress, queue, resource, dispatch, id, onStartProgress} = this.props;
    return (
        <tr>
          <td>
          <button className="button-primary" onClick={(id) => (onStartProgress(id))}>{resource.name}</button>
          </td>
          <td><div>{queue}</div></td>
          <td><div><progress value={progress.toFixed(0)} max="100"></progress></div></td>
          <td><div>{resource.price}</div></td>
          <td><div>{(1000 * resource.price / resource.time).toFixed(1)}</div></td>
        </tr>
    );
  }
}
