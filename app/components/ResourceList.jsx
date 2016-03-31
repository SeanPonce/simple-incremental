import React from 'react';
import Resource from './Resource.jsx';

export default class App extends React.Component {
  render() {
    let {dispatch} = this.props;
    return (
      <div className="ResourceList">
        <Resource />
      </div>
    );
  }
}
