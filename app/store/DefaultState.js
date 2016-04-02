import uuid from 'node-uuid';

export default {
  credits: 0,
  resources: [
    {
      id: uuid.v4(),
      name: 'Iron',
      time: 5,
      credits: 20,
      enabled: true
    },
    {
      id: uuid.v4(),
      name: 'Silver',
      time: 10,
      credits: 100,
      enabled: false
    },
    {
      id: uuid.v4(),
      name: 'Gold',
      time: 30,
      credits: 500,
      enabled: false
    },
  ],

  upgrades: [
    {
      id: uuid.v4(),
      name: 'Unlock Silver',
      credits: 40,
      enabled: false
    },
    {
      id: uuid.v4(),
      name: 'Unlock Gold',
      credits: 200,
      enabled: false
    },
  ]
};
