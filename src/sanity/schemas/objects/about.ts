 
  export default {
    name: 'about',
    title: 'About',
    type: 'object',
    fields: [
      {
        name: 'aboutImage',
        title: 'About Image',
        type: 'image', // You might want to use 'image' type here
      },
      {
        name: 'aboutImageCaption',
        title: 'About Image Caption',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'about',
        title: 'About',
        type: 'text',
      },
      {
        name: 'resumeUrl',
        title: 'Resume URL',
        type: 'url',
      },
      {
        name: 'callUrl',
        title: 'Call URL',
        type: 'url',
      },
    ],
  };
