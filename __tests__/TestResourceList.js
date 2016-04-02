'use strict';

jest.unmock('../app/components/ResourceList.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ResourceList from '../app/components/ResourceList.jsx';

describe('ResourceList', () => {

    it('has className ResourceList', () => {
      const resources=[];
      const onResourceAdd = () => {};
	const resourceList = TestUtils.renderIntoDocument(
	    <ResourceList resources={resources} onResourceAdd={onResourceAdd}/>
	);

	const resourceListNode = ReactDOM.findDOMNode(resourceList);

	expect(resourceListNode.className).toEqual("ResourceList");
    });
});
