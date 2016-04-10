import React from 'react';
import {connect} from 'react-redux';
import {startProgress, sellResource} from "../actions/Actions.js";
import Resource from './Resource.jsx';

@connect((state) => {
  const gameData = state.gameData;
  return {
  resources: gameData.get('resources'),
  resourceData: gameData.get('resourceData'),
  progressList: gameData.get('progress')
  }
}, {
  startProgress,
  sellResource
})
export default class ResourceList extends React.Component {
		render() {
				let {progressList, resources, resourceData, startProgress, sellResource} = this.props;
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
                      progress={progressList.get(resource.get('id')) === undefined ? 0 : progressList.get(resource.get('id')).progress}
											resource={resource.toJS()}
											onStartProgress={startProgress.bind(null, resource.get('id'))}
											onResourceSell={sellResource.bind(null, resource.get('id'))} />
									)}
								</tbody>
							</table>
						</div>
				);
		}
}
