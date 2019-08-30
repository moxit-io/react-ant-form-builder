import React, { useState, useEffect } from 'react';
import { Form, Row, Button, Input, List, Affix, Col } from 'antd';

import arrayMove from 'array-move';
import { SortableContainer } from 'react-sortable-hoc';

// Import style
import './assets/style.css';
import SortableCard from './SortableCard';

const SortableItem = ({ index, value, onDelete, onChange }) => (
  <SortableCard
    onDelete={onDelete}
    onChange={onChange}
    index={index}
    value={value}
  />
);

const SortableList = SortableContainer(
  ({ items, header, onDelete, onChange }) => {
    return (
      <List
        header={header}
        size="large"
        dataSource={items}
        renderItem={(item, index) => {
          return (
            <SortableItem
              onChange={onChange}
              onDelete={onDelete}
              index={index}
              value={{ ...item, index, items }}
            />
          );
        }}
      />
    );
  }
);

const FormBuilder = ({
  formStructure = {},
  form: { getFieldDecorator, validateFields },
}) => {
  const [data, setData] = useState({
    name: '',
    description: '',
    schema: [],
  });

  useEffect(() => {
    if (formStructure) setData(formStructure);
  }, [formStructure]);

  const handleSubmit = e => {
    e.preventDefault();

    validateFields((err, formData) => {
      if (!err) {
        console.log(formData);
      }
    });
  };

  getFieldDecorator('id', { initialValue: data.id });
  getFieldDecorator('formType', { initialValue: data.type });

  return (
    <Form colon={false} onSubmit={handleSubmit} noValidate>
      <Form.Item label="Name">
        {getFieldDecorator('name', {
          initialValue: data.name,
          rules: [
            {
              required: true,
              message: 'Form name is required',
              whitespace: true,
            },
          ],
        })(<Input placeholder="Add form name" />)}
      </Form.Item>
      <Form.Item label="Description">
        {getFieldDecorator('description', {
          initialValue: data.description,
          rules: [
            {
              required: true,
              message: 'Form description is required',
              whitespace: true,
            },
          ],
        })(<Input.TextArea placeholder="Add form description" />)}
      </Form.Item>
      <Row>
        <Col span={23}>
          <Row style={{ background: '#ECECEC' }}>
            <SortableList
              items={data.schema}
              onChange={updatedSchema => {
                setData({ ...data, schema: updatedSchema });
              }}
              onDelete={deletedItem => {
                console.log(deletedItem);
                if (deletedItem) {
                  const updatedList = data.schema.filter(
                    item => item.field !== deletedItem.field
                  );
                  setData({ ...data, schema: updatedList });
                }
              }}
              onSortEnd={({ oldIndex, newIndex }) => {
                // // Re-assigned avoid mutation.
                let updatedSchema = data.schema;
                updatedSchema = arrayMove(updatedSchema, oldIndex, newIndex);

                setData({ ...data, schema: updatedSchema });
              }}
            />
          </Row>
        </Col>
        <Col>
          <Row type="flex" justify="center">
            <Affix offsetTop={400}>
              <Button icon="plus" />
            </Affix>
          </Row>
        </Col>
      </Row>

      <div
        style={{
          margin: '30 0',
        }}
      >
        <Button htmlType="submit">Save</Button>
      </div>
    </Form>
  );
};

export default Form.create('form_builder')(FormBuilder);
