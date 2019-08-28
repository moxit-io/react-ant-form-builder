import React from 'react';
import { Form, Input, Checkbox, Button, Radio, Select, Row, Col } from 'antd';

export const selectFormElement = type => {
  switch (type) {
    case 'input':
      return Input;
    case 'textarea':
      return Input.TextArea;
    case 'password':
      return Input.Password;
    case 'checkbox':
      return Checkbox.Group;
    case 'radio':
      return Radio.Group;
    case 'select':
      return Select;

    default:
      return null;
  }
};

export const FormItemRenderer = ({ formItem, decorator, initialValue }) => {
  const {
    label,
    field,
    type,
    placeholder,
    options,
    disabled,
    size,
    mode,
    text,
    ...fieldProps
  } = formItem;

  if (type === 'select') {
    return (
      <Form.Item label={label}>
        {decorator(field, {
          ...fieldProps,
          initialValue,
        })(
          <Select
            placeholder={placeholder}
            mode={mode}
            disabled={disabled}
            size={size}
          >
            {options.map(item => (
              <Select.Option key={item.value} value={item.value}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        )}
      </Form.Item>
    );
  }

  if (type === 'confirm') {
    return (
      <Form.Item label={label}>
        {decorator(field, {
          ...fieldProps,
          initialValue,
        })(<Checkbox>{text}</Checkbox>)}
      </Form.Item>
    );
  }

  const FormElement = selectFormElement(type);
  if (!FormElement) return null;

  return (
    <Form.Item label={label}>
      {decorator(field, {
        ...fieldProps,
        initialValue,
      })(
        <FormElement
          placeholder={placeholder}
          options={options}
          disabled={disabled}
          size={size}
        />
      )}
    </Form.Item>
  );
};

const FormRenderer = ({
  colon = false,
  form: { getFieldDecorator, validateFields },
  data = {},
  formStructure: { id, type, name, description, schema },
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('here');
    validateFields((err, formData) => {
      if (!err) {
        console.log(formData);
      }
    });
  };

  getFieldDecorator('id', { initialValue: data.id });
  getFieldDecorator('formId', { initialValue: id });
  getFieldDecorator('formType', { initialValue: type });

  return (
    <Col>
      <Row>
        {name && (
          <Row>
            <h2>{name}</h2>
          </Row>
        )}
        {description && (
          <Row>
            <p>{description}</p>
          </Row>
        )}
        <Form onSubmit={handleSubmit} colon={colon}>
          {schema &&
            schema.map(fieldItem => (
              <FormItemRenderer
                key={fieldItem.label}
                formItem={fieldItem}
                decorator={getFieldDecorator}
                initialValue={data[fieldItem.field]}
              />
            ))}
          <div>
            <Button htmlType="submit">Submit</Button>
          </div>
        </Form>
      </Row>
    </Col>
  );
};

export default Form.create()(FormRenderer);
