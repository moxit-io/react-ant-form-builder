export const form = {
  id: 'ADKAKKS04DSKADQOO434U44OI4O',
  type: 'survey',
  name: 'Medicine Survey Form',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  schema: [
    {
      label: 'Name',
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
      label: 'Summary',
      field: 'summary',
      type: 'textarea',
      size: 'large',
      placeholder: 'Add summary',
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
};
