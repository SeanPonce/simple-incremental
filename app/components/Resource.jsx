import React from 'react';

export default class Resource extends React.Component {
  render() {
		let {progress, queue, resource, dispatch, id, onStartProgress} = this.props;
    const progStr = "" + progress + "%";
    return (
        <tr>
          <td>
          <button className="btn btn-info" onClick={(id) => (onStartProgress(id))}>{resource.name}</button> <span className="badge">{queue}</span>
          </td>
          <td>
            <div className="progress">
              <div className="progress-bar progress-bar-info" role="progressbar"
                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
                style={{width: progStr}}>
              </div>
            </div>
          </td>
          <td><div>{resource.price}</div></td>
        </tr>
    );
  }
}
