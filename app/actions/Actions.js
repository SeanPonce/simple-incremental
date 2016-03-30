import uuid from 'node-uuid';

export function addResource(resourceName) {
  type: "ADD_RESOURCE",
  resourceName
}
