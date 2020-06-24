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
        <h1>Renderer</h1>
        <FormRenderer
          allowDraft
          formStructure={formSchema}
          data={data}
          onSave={changedData => {
            setData(changedData);
          }}
          onError={error => console.log(error)}
        />
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
