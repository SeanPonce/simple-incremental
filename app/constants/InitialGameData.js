import uuid from 'node-uuid';

// Game Data when no upgrades are applied
export default {
  money: 0,
  queue: {
    iron: 0,
    silver: 0,
    gold: 0
  },
  progress: {},
  resourceData: {
    iron: {
      id: 'iron',
      name: 'Iron',
      time: 3000,
      price: 20,
      enabled: true
    },
    silver: {
      id: 'silver',
      name: 'Silver',
      time: 5000,
      price: 100,
      enabled: false
    },
    gold: {
      id: 'gold',
      name: 'Gold',
      time: 10000,
      price: 500,
      enabled: false
    }
  },
  upgrades: {
    UNLOCK_SILVER: {
      id: 'UNLOCK_SILVER',
      name: 'Unlock Silver',
      price: 100,
      purchased: false
    },
    UNLOCK_GOLD: {
      id: 'UNLOCK_GOLD',
      name: 'Unlock Gold',
      price: 1000,
      purchased: false
    },
    IRON_PRICE_1: {
      id: 'IRON_PRICE_1',
      name: 'Increase Iron Price',
      price: 40,
      purchased: false
    },
    IRON_PRICE_2: {
      id: 'IRON_PRICE_2',
      name: 'Increase Iron Price',
      price: 500,
      purchased: false
    },
    IRON_PRICE_3: {
      id: 'IRON_PRICE_3',
      name: 'Increase Iron Price',
      price: 2000,
      purchased: false
    },
    SILVER_PRICE_1: {
      id: 'SILVER_PRICE_1',
      name: 'Increase Silver Price',
      price: 200,
      purchased: false
    },
    SILVER_PRICE_2: {
      id: 'SILVER_PRICE_2',
      name: 'Increase Silver Price',
      price: 2500,
      purchased: false
    },
    SILVER_PRICE_3: {
      id: 'SILVER_PRICE_3',
      name: 'Increase Silver Price',
      price: 10000,
      purchased: false
    },
    GOLD_PRICE_1: {
      id: 'GOLD_PRICE_1',
      name: 'Increase Gold Price',
      price: 1000,
      purchased: false
    },
    GOLD_PRICE_2: {
      id: 'GOLD_PRICE_2',
      name: 'Increase Gold Price',
      price: 10000,
      purchased: false
    },
    GOLD_PRICE_3: {
      id: 'GOLD_PRICE_3',
      name: 'Increase Gold Price',
      price: 100000,
      purchased: false
    },
  }
};
