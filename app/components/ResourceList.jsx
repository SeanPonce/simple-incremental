import React from 'react';
import Resource from './Resource.jsx';

export default class ResourceList extends React.Component {
		render() {
				let {resources, onResourceAdd} = this.props;
				return (
						<div className="ResourceList">{resources.map(resource =>
								<Resource
									id ={resource.get('id')}
									key={resource.get('id')}
									resource={resource.toJS()}
									onResourceAdd={onResourceAdd.bind(null, resource.get('id'))} />
						)}
						</div>
				);
		}
}
