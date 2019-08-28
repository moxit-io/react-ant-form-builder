import React from 'react';
import ReactDOM from 'react-dom';

// Sample data.
import { form, data } from './sample';

// Components
import FormBuilder from '../../src/FormBuilder';
import FormRenderer from '../../src/FormRenderer';

const App = () => (
  <div>
    <FormBuilder />
    <FormRenderer formStructure={form} data={data} />
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
