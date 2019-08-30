import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Layout, Col, Row } from 'antd';

// Sample data.
// import { form, data } from './sample';

// Components
import FormBuilder from '../../src/FormBuilder';
import FormRenderer from '../../src/FormRenderer';

const App = () => {
  const [formSchema, setFormSchema] = useState({});
  const [data, setData] = useState({});

  return (
    <Layout style={{ background: '#FFF' }}>
      <Row gutter={16}>
        <Col span={14}>
          <h1>Builder</h1>
          <FormBuilder
            formStructure={formSchema}
            onSave={schema => {
              setFormSchema(schema);
            }}
            onError={error => console.log(error)}
          />
        </Col>
        <Col span={10}>
          <h1>Renderer</h1>
          <FormRenderer
            formStructure={formSchema}
            data={data}
            onSave={changedData => {
              setData(changedData);
            }}
            onError={error => console.log(error)}
          />
        </Col>
      </Row>
    </Layout>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
