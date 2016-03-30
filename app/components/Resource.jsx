import React from 'react';

export default class App extends React.Component {
  render() {
    let {dispatch} = this.props;
    return (
      <div className="Resource">
        <button>Add Resource</button>
      </div>
    );
  }
}
