import React from 'react';
import ReactDOM from 'react-dom';

import { Tabs, Layout } from 'antd';

// Sample data.
import { form, data } from './sample';

// Components
import FormBuilder from '../../src/FormBuilder';
import FormRenderer from '../../src/FormRenderer';

const { TabPane } = Tabs;

const App = () => (
  <Layout style={{ background: '#FFF' }}>
    <Tabs tabPosition="left" defaultActiveKey="1">
      <TabPane tab="Builder" key="1">
        <FormBuilder formStructure={form} />
      </TabPane>
      <TabPane tab="Renderer" key="2">
        {/* Pass form Structure and data to the renderer. */}
        <FormRenderer formStructure={form} data={data} />
      </TabPane>
    </Tabs>
  </Layout>
);
ReactDOM.render(<App />, document.getElementById('root'));
