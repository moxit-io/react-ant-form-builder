# react-ant-form-builder

A Drag and drop Ant Design form builder. Works with `antd 3x`.

## Demo

http://www.moxit.com/react-ant-form-builder

## Example

```JSX

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {FormBuilder, FormRenderer} from 'react-ant-form-builder';

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
            // onSave form schema received here.
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
            // onSave for data received here.
            setData(changedData);
          }}
          onError={error => console.log(error)}
        />
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

```
