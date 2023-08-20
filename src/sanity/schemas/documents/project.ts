export default {
  name: 'project',
  title: 'Project',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'techstack',
      title: 'Tech Stack',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'projectCategory' }],
    },
    {
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        {
          name: 'visit',
          title: 'Visit Link',
          type: 'url',
        },
        {
          name: 'code',
          title: 'Code Link',
          type: 'url',
        },
      ],
    },
  ],
}
