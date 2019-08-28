export const form = {
  id: 'ADKAKKS04DSKADQOO434U44OI4O',
  type: 'survey',
  name: 'Medicine Survey Form',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  schema: [
    {
      label: 'Full name',
      field: 'name',
      type: 'input',
      size: 'large',
      placeholder: 'Add your name',
      rules: [
        {
          required: true,
          message: 'Name is required',
          whitespace: true,
        },
      ],
    },

    {
      label: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
      field: 'summary',
      type: 'textarea',
      size: 'large',
      placeholder: 'Add summary',
      help: 'Add a short description',
      rules: [
        {
          required: true,
          message: 'Summary is required',
          whitespace: true,
        },
      ],
    },

    {
      label: 'Mood',
      field: 'mood',
      type: 'checkbox',
      placeholder: 'Select one or more mood ',
      size: 'large',
      options: [
        {
          value: '😀',
          label: '😀',
        },
        {
          value: '😭',
          label: '😭',
        },
        {
          value: '👺',
          label: '👺',
        },
      ],
      rules: [
        {
          required: true,
          message: 'Enabled State is required',
        },
      ],
    },

    {
      label: 'Gender',
      field: 'gender',
      type: 'radio',
      placeholder: 'Select Gender',
      rules: [
        {
          required: true,
          message: 'Gender is required',
        },
      ],
      size: 'large',
      options: [
        {
          value: 'Male',
          label: 'Male',
        },
        {
          value: 'Female',
          label: 'Female',
        },
      ],
    },

    {
      label: 'Country',
      field: 'country',
      type: 'select',
      mode: 'multiple',
      placeholder: 'Select your country',
      rules: [
        {
          required: true,
          message: 'Country is required',
        },
      ],
      size: 'large',
      options: [
        {
          value: 'United States',
          label: 'United States',
        },
        {
          value: 'Ethiopia',
          label: 'Ethiopia',
        },
        {
          value: 'Australia',
          label: 'Australia',
        },
        {
          value: 'United Kingdom',
          label: 'United Kingdom',
        },
      ],
    },

    {
      label: 'Confirm',
      text: 'I confirm that the above information is correct.',
      field: 'confirm',
      type: 'confirm',
      valuePropName: 'checked',
      placeholder: 'Confirm information',
      help: 'You are required to confirm.',
      rules: [
        {
          required: true,
          message: 'Confirmation is required',
        },
      ],
    },
  ],
};

export const data = {
  name: 'Naod',
  summary: 'The quick brown fox jumps over the lazy dog.',
};
