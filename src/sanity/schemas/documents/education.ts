
  export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    preview: {
      select: {
        title: 'institute',
      },
    },
    fields: [
      {
        name: 'institute',
        title: 'Institute',
        type: 'string',
      },
      {
        name: 'degree',
        title: 'Degree',
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
    ],
  };