import React from 'react';
import {connect} from 'react-redux';
import {addResource, sellResource} from "../actions/Actions.js";
import Resource from './Resource.jsx';

@connect((state) => {
  const gameData = state.gameData;
  return {
  resources: gameData.get('resources'),
  resourceData: gameData.get('resourceData')
  }
}, {
  addResource,
  sellResource
})
export default class ResourceList extends React.Component {
		render() {
				let {resources, resourceData, addResource, sellResource} = this.props;
				return (
						<div className="ResourceList">
							<table className="u-full-width">
								<thead>
									<tr>
										<th>Mine Resource</th>
										<th>Progress</th>
										<th>Tons</th>
										<th>Sale Price</th>
									</tr>
								</thead>
								<tbody>
									{resourceData.valueSeq().filter( resource => resource.get('enabled') ).map(resource =>
										<Resource
											id ={resource.get('id')}
											key={resource.get('id')}
											amount={resources.get(resource.get('id'))}
											resource={resource.toJS()}
											onResourceAdd={addResource.bind(null, resource.get('id'))}
											onResourceSell={sellResource.bind(null, resource.get('id'))} />
									)}
								</tbody>
							</table>
						</div>
				);
		}
}
