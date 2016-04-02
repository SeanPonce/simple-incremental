import React from 'react';

export default class Resource extends React.Component {
  render() {
		let {resource, dispatch, id, onResourceAdd} = this.props;
    return (
      <div className="Resource">
        <button onClick={(id) => (onResourceAdd(id))}>Add {resource.name}</button>
      </div>
    );
  }
}
