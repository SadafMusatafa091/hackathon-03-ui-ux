export default {
    name: 'vehicle',
    type: 'document',
    title: 'Vechiel',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Vechiel Name',
      },
      {
        name: 'type',
        type: 'string',
        title: 'Vechiel Type',
      },
      {
        name: 'rentalPrice',
        type: 'number',
        title: 'Rental Price per Day',
      },
      {
        name: 'availability',
        type: 'boolean',
        title: 'Is Available?',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Vehicle Image',
      },
    ],
  };