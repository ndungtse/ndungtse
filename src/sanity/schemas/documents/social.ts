  
  export default {
    name: 'social',
    title: 'Social',
    type: 'document',
    preview: {
      select: {
        title: 'name',
      },
    },
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'string', // You might want to use 'image' type here
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string',
      },
    ],
  };