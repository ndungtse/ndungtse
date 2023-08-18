  
  export default {
    name: 'skill',
    title: 'Skill',
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
        name: 'image',
        title: 'Image',
        type: 'image', // You might want to use 'image' type here
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'skillCategory' }],
      },
    ],
  };