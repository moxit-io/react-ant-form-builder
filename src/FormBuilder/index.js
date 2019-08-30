import React, { useState, useEffect, useRef } from 'react';
import { Form, Row, Button, Input, List, Affix, Col } from 'antd';
import { camelCase } from 'lodash';
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

const SortableSchema = SortableContainer(({ items, header, onChange }) => {
  return (
    <List
      header={header}
      size="large"
      dataSource={items}
      renderItem={(item, index) => {
        return (
          <SortableItem
            onChange={onChange}
            onDelete={deletedItem => {
              if (deletedItem) {
                const updatedSchema = items.filter(
                  i => i.field !== deletedItem.field
                );
                onChange(updatedSchema);
              }
            }}
            index={index}
            value={{ ...item, index, items }}
          />
        );
      }}
    />
  );
});
const SchemaList = React.memo(
  React.forwardRef(({ value, onChange, header }, ref) => (
    <SortableSchema
      ref={ref}
      items={value}
      onChange={onChange}
      header={header}
      onSortEnd={({ oldIndex, newIndex }) => {
        // Re-assigned avoid mutation.
        let updatedSchema = value;
        updatedSchema = arrayMove(updatedSchema, oldIndex, newIndex);
        onChange(updatedSchema);
      }}
    />
  ))
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

  const bottomRef = useRef(null);

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
        })(
          <Input.TextArea
            placeholder="Add form description"
            autosize={{ minRows: 2, maxRows: 6 }}
          />
        )}
      </Form.Item>
      <Row>
        <Col span={23}>
          <Row style={{ background: '#ECECEC' }}>
            <Form.Item>
              {getFieldDecorator('schema', {
                initialValue: data.schema,
              })(<SchemaList />)}
            </Form.Item>
            <div ref={bottomRef} />
          </Row>
        </Col>
        <Col>
          <Row type="flex" justify="center">
            <Affix offsetTop={400}>
              <Button
                icon="plus"
                onClick={() => {
                  setData({
                    ...data,
                    schema: [
                      ...data.schema,
                      {
                        label: `Question ${data.schema.length + 1}`,
                        field: camelCase(`Question ${data.schema.length + 1}`),
                        type: 'input',
                        placeholder: 'Add question',
                        options: [],
                      },
                    ],
                  });
                  setTimeout(() => {
                    window.scrollTo(0, bottomRef.current.offsetTop);
                  }, 200);
                }}
              />
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
