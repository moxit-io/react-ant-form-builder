import React from 'react';
import { Form, Row, Button, Input, List, Col } from 'antd';
import { camelCase, isEmpty } from 'lodash';
import arrayMove from 'array-move';
import { SortableContainer } from 'react-sortable-hoc';

// Import style
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

const emptyField = [
  {
    type: 'input',
    placeholder: '',
    label: `Question1`,
    field: camelCase(`Question1`),
    rules: [{ required: false, message: 'Field is required' }],
  },
];

const SchemaList = React.forwardRef(({ value, onChange, header }, ref) => {
  // const bottomRef = useRef(null);
  const handleChange = change => onChange(change);
  return (
    <Row>
      <Col
        // span={22}
        ref={ref}
      >
        <Row style={{ background: '#ECECEC' }}>
          <SortableSchema
            items={value}
            onChange={onChange}
            header={header}
            onSortEnd={({ oldIndex, newIndex }) => {
              // Re-assigned avoid mutation.
              let updatedSchema = value;
              updatedSchema = arrayMove(updatedSchema, oldIndex, newIndex);
              handleChange(updatedSchema);
            }}
          />
        </Row>
        <Row>
          <Button
            style={{ marginTop: 10 }}
            type="primary"
            icon="plus"
            title="Add new"
            block
            onClick={() => {
              const updatedList = [
                ...value,
                {
                  type: 'input',
                  placeholder: '',
                  label: `Question${value.length + 1}`,
                  field: camelCase(`Question ${value.length + 1}`),
                  rules: [{ required: false, message: 'Field is required' }],
                },
              ];
              handleChange(updatedList);
            }}
          >
            Add new question
          </Button>
        </Row>
      </Col>
      {/* <Col>
        <Row type="flex" justify="center">
          <Affix offsetTop={400}>
            <Button
              icon="plus"
              type="primary"
              onClick={() => {
                const updatedList = [
                  ...value,
                  {
                    type: 'input',
                    placeholder: '',
                    label: `Question${value.length + 1}`,
                    field: camelCase(`Question ${value.length + 1}`),
                    rules: [{ required: false, message: 'Field is required' }],
                  },
                ];
                handleChange(updatedList);
                setTimeout(() => {
                  if (bottomRef.current) window.scrollTo(0, ref);
                }, 200);
              }}
            />
          </Affix>
          <div ref={bottomRef} />
        </Row>
      </Col> */}
    </Row>
  );
});

const FormBuilder = ({
  onSave,
  noSave = false,
  onError,
  formStructure = {},
  form: { getFieldDecorator, validateFields },
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, formData) => {
      if (!err) {
        if (onSave) onSave(formData);
      } else if (onError) onError(err);
    });
  };

  if (formStructure.id)
    getFieldDecorator('id', { initialValue: formStructure.id });
  if (formStructure.type)
    getFieldDecorator('type', { initialValue: formStructure.type });

  return (
    <Form colon={false} onSubmit={handleSubmit} noValidate>
      <Form.Item label="Name">
        {getFieldDecorator('name', {
          initialValue: formStructure.name || '',
        })(<Input placeholder="Add form name" />)}
      </Form.Item>
      <Form.Item label="Description">
        {getFieldDecorator('description', {
          initialValue: formStructure.description || '',
        })(
          <Input.TextArea
            placeholder="Add form description"
            autosize={{ minRows: 2, maxRows: 6 }}
          />
        )}
      </Form.Item>
      <Row>
        <Form.Item>
          {getFieldDecorator('schema', {
            initialValue: !isEmpty(formStructure.schema)
              ? formStructure.schema
              : emptyField,
          })(<SchemaList />)}
        </Form.Item>
      </Row>

      <div
        style={{
          margin: '30 0',
        }}
      >
        {!noSave && <Button htmlType="submit">Save</Button>}
      </div>
    </Form>
  );
};

export default Form.create({
  name: 'form_builder',
  onFieldsChange(props) {
    if (props.noSave) {
      props.onSave(props.form.getFieldsValue());
    }
  },
})(FormBuilder);
