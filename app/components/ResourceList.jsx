import React from 'react';
import Resource from './Resource.jsx';

export default class ResourceList extends React.Component {
		render() {
				let {resources, onResourceAdd, onResourceSell} = this.props;
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
							{resources.filter( resource => resource.get('enabled') ).map(resource =>
								<Resource
									id ={resource.get('id')}
									key={resource.get('id')}
									resource={resource.toJS()}
									onResourceAdd={onResourceAdd.bind(null, resource.get('id'))}
									onResourceSell={onResourceSell.bind(null, resource.get('id'))} />
							)}
								</tbody>
							</table>
						</div>
				);
		}
}
