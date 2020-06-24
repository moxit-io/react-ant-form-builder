import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormRenderer, FormBuilder } from '../../src';

import './example.css';

const App = () => {
  const [formSchema, setFormSchema] = useState({});
  const [data, setData] = useState({});

  return (
    <div className="row">
      <div className="column">
        <h1>Builder</h1>
        <FormBuilder
          formStructure={formSchema}
          onSave={schema => {
            setFormSchema(schema);
          }}
          onError={error => console.log(error)}
        />
      </div>
      <div className="column">
        <h1>Rendered form</h1>
        <FormRenderer
          allowDraft
          formStructure={formSchema}
          data={data}
          onSave={changedData => {
            setData(changedData);
          }}
          onError={error => console.log(error)}
        />

        <div>
          <h1>Submitted form data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>

        <div>
          <h1>Form schema</h1>
          <pre>{JSON.stringify(formSchema, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
