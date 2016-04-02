import React from 'react';
import Resource from './Resource.jsx';

export default class ResourceList extends React.Component {
		render() {
				let {resources, onResourceAdd} = this.props;
				return (
						<div className="ResourceList">{resources.map(resource =>
								<Resource
									id ={resource.id}
									key={resource.id}
									resource={resource}
									onResourceAdd={onResourceAdd.bind(null, resource.id)} />
						)}
						</div>
				);
		}
}
