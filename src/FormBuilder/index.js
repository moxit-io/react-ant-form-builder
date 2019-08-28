import React, { useState, useEffect } from 'react';
import { Form, Row, Button, Input, List } from 'antd';

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
              value={item}
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

      <Row
        style={{ background: '#ECECEC', padding: '30px', marginTop: '30px' }}
      >
        <SortableList
          // ref={ref}
          items={data.schema || []}
          // header={header}
          onChange={value => {
            console.log({ value });
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
            let updatedList = data.schema;
            updatedList = arrayMove(updatedList, oldIndex, newIndex);

            setData({ ...data, schema: updatedList });
          }}
        />
      </Row>
      <div>
        <Button htmlType="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default Form.create('form_builder')(FormBuilder);
