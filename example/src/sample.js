export const form = {
  id: 'ADKAKKS04DSKADQOO434U44OI4O',
  type: 'survey',
  name: 'Medicine Survey Form',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  schema: [
    {
      type: 'input',
      placeholder: 'Add question',
      label: 'Question1',
      field: 'question1',
      rules: [
        {
          required: false,
          message: 'Field is required',
        },
      ],
    },
    {
      label: 'Question2',
      field: 'question2',
      type: 'textarea',
      rules: [
        {
          required: false,
          message: 'Field is required',
        },
      ],
    },
  ],
};

export const data = {
  id: 'xyz',
  question1: 'Naod',
  question2: 'The quick brown fox jumps over the lazy dog.',
  draft: true,
};
