
export default {
    name: 'data',
    title: 'Data',
    type: 'document',
    preview: {
      select: {
        title: 'main.name',
      },
    },
    fields: [
      {
        name: 'main',
        title: 'Main',
        type: 'main',
      },
      {
        name: 'about',
        title: 'About',
        type: 'about',
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{ type: "reference", to: { type: "skill" } }],
      },
      {
        name: 'projects',
        title: 'Projects',
        type: 'array',
        of: [{ type: "reference", to: { type: "project" } }],
      },
      {
        name: 'experiences',
        title: 'Experiences',
        type: 'array',
        of: [{ type: "reference", to: { type: "experience" } }],
      },
      {
        name: 'educations',
        title: 'Educations',
        type: 'array',
        of: [{ type: "reference", to: { type: "education" } }],
      },
      {
        name: 'socials',
        title: 'Socials',
        type: 'array',
        of: [{ type: "reference", to: { type: "social" } }],
      },
    ],
  };

  