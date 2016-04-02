import uuid from 'node-uuid';

export function addResource(id) {
  return {
    type: "ADD_RESOURCE",
    id
  };
};
