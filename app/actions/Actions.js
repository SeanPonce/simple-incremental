import uuid from 'node-uuid';

export function addResource(id) {
  return {
    type: "ADD_RESOURCE",
    id
  };
};

export function sellResource(id) {
  return {
    type: "SELL_RESOURCE",
    id
  };
};

export function buyUpgrade(id) {
  return {
    type: "BUY_UPGRADE",
    id
  };
};
