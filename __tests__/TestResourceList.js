'use strict';

jest.unmock('../app/components/ResourceList.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ResourceList from '../app/components/ResourceList.jsx';

describe('ResourceList', () => {

    it('has className ResourceList', () => {
	const resourceList = TestUtils.renderIntoDocument(
	    <ResourceList />
	);

	const resourceListNode = ReactDOM.findDOMNode(resourceList);

	expect(resourceListNode.className).toEqual("ResourceList");
    });
});
