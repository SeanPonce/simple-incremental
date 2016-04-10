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

export function startProgress(id) {
  return {
    type: "START_PROGRESS",
    id
  }
}

export function updateProgress() {
  return {
    type: "UPDATE_PROGRESS"
  }
}
