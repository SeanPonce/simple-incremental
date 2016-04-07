import uuid from 'node-uuid';

export default {
  money: 0,
  resources: [
    {
      id: uuid.v4(),
      name: 'Iron',
      time: 5,
      price: 20,
      amount: 0,
      enabled: true
    },
    {
      id: uuid.v4(),
      name: 'Silver',
      time: 10,
      price: 100,
      amount: 0,
      enabled: false
    },
    {
      id: uuid.v4(),
      name: 'Gold',
      time: 30,
      price: 500,
      amount: 0,
      enabled: false
    },
  ],

  upgrades: [
    {
      id: uuid.v4(),
      name: 'Unlock Silver',
      price: 40,
      state: 'hidden'
    },
    {
      id: uuid.v4(),
      name: 'Unlock Gold',
      price: 200,
      state: 'hidden'
    },
  ]
};
