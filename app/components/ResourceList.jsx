import React from 'react';
import {connect} from 'react-redux';
import {startProgress, sellResource} from "../actions/Actions.js";
import Resource from './Resource.jsx';

@connect((state) => {
  const gameData = state.gameData;
  return {
  queue: gameData.get('queue'),
  resourceData: gameData.get('resourceData'),
  progressList: gameData.get('progress')
  }
}, {
  startProgress
})
export default class ResourceList extends React.Component {
		render() {
				let {progressList, queue, resourceData, startProgress} = this.props;
				return (
						<div className="ResourceList">
							<table className="u-full-width">
								<thead>
									<tr>
										<th>Resource</th>
                    <th>Queue</th>
										<th>Progress</th>
										<th>Price</th>
                    <th>Price/Second</th>
									</tr>
								</thead>
								<tbody>
									{resourceData.valueSeq().filter( resource => resource.get('enabled') ).map(resource =>
										<Resource
											id ={resource.get('id')}
											key={resource.get('id')}
											queue={queue.get(resource.get('id'))}
                      progress={progressList.get(resource.get('id')) === undefined ? 0 : progressList.get(resource.get('id')).progress}
											resource={resource.toJS()}
											onStartProgress={startProgress.bind(null, resource.get('id'))} />
									)}
								</tbody>
							</table>
						</div>
				);
		}
}
