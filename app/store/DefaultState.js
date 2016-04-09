import uuid from 'node-uuid';

// Game Data when no upgrades are applied
export default {
  money: 0,
  resources: {
    iron: 0,
    silver: 0,
    gold: 0
  },
  resourceData: {
    iron: {
      id: 'iron',
      name: 'Iron',
      time: 5,
      price: 20,
      enabled: true
    },
    silver: {
      id: 'silver',
      name: 'Silver',
      time: 10,
      price: 100,
      enabled: false
    },
    gold: {
      id: 'gold',
      name: 'Gold',
      time: 30,
      price: 500,
      enabled: false
    }
  },
  upgrades: {
    UNLOCK_SILVER: {
      id: 'UNLOCK_SILVER',
      name: 'Unlock Silver',
      price: 40,
      purchased: false
    },
    UNLOCK_GOLD: {
      id: 'UNLOCK_GOLD',
      name: 'Unlock Gold',
      price: 200,
      purchased: false
    }
  }
};
