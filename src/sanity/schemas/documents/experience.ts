export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    preview: {
      select: {
        title: 'company',
      },
    },
    fields: [
      {
        name: 'company',
        title: 'Company',
        type: 'string',
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'date',
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'date',
      },
      {
        name: 'desc',
        title: 'Description',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };