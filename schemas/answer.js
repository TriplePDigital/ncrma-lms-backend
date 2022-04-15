export default {
  name: 'answer',
  title: 'Answer',
  type: 'object',
  fields: [
    {
      name: 'answers',
      title: 'Answers',
      type: 'string',
    },
    {
      name: 'correct',
      title: 'Is this the correct answer?',
      type: 'boolean',
      initialValue: false,
      required: true,
    },
  ],
  // TODO: This isn't supported for objects
  // initialValue: {
  //   correct: false,
  // },
};
