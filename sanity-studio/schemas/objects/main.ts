export default {
    name: 'main',
    title: 'Main',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'titles',
        title: 'Titles',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image', // You might want to use 'image' type here
      },
      {
        name: 'shortDesc',
        title: 'Short Description',
        type: 'string',
      },
      {
        name: 'techStackImages',
        title: 'Tech Stack Images',
        type: 'array',
        of: [{ type: 'image' }], // You might want to use 'image' type here
      },
    ],
  };