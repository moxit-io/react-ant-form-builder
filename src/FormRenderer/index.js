import React, { useState } from 'react';
import { Form, Input, Checkbox, Button, Radio, Select, Row, Col } from 'antd';
import { isEmpty } from 'lodash';

const isDraft = data => {
  let draft = false;

  if (isEmpty(data)) draft = true;

  if (
    !isEmpty(data) &&
    (data.draft !== undefined || data.draft !== null) &&
    data.draft
  )
    draft = true;
  return draft;
};

const selectFormElement = type => {
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
    default:
      return null;
  }
};

export const FormItemRenderer = ({ formItem, decorator, initialValue }) => {
  const { label, field, type, ...fieldProps } = formItem;
  // Select list
  if (type === 'select') {
    return (
      <Form.Item label={label} help={fieldProps.help || ''}>
        {decorator(field, {
          ...fieldProps,
          initialValue: initialValue || [],
        })(
          <Select {...fieldProps}>
            {fieldProps.options &&
              fieldProps.options.map(item => (
                <Select.Option key={item.value} value={item.value}>
                  {item.label}
                </Select.Option>
              ))}
          </Select>
        )}
      </Form.Item>
    );
  }
  // Confirm checkbox
  if (type === 'confirm') {
    return (
      <Form.Item label="" help={fieldProps.help || ''}>
        {decorator(field, {
          ...fieldProps,
          initialValue: initialValue || false,
        })(<Checkbox>{label}</Checkbox>)}
      </Form.Item>
    );
  }
  // Others
  const FormElement = selectFormElement(type);
  if (!FormElement) return null;

  return (
    <Form.Item
      labelAlign={fieldProps.labelAlign || 'left'}
      label={label}
      help={fieldProps.help || ''}
    >
      {decorator(field, {
        ...fieldProps,
        initialValue,
      })(<FormElement {...fieldProps} />)}
    </Form.Item>
  );
};

const FormRenderer = ({
  colon = false,
  form: { getFieldDecorator, validateFields },
  data = {},
  onSave,
  onError,
  formStructure: { id, type, name, description, schema },
  formProps,
  allowDraft = false,
}) => {
  const [draft, setDraft] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, formData) => {
      if (!err) {
        if (onSave) onSave({ formData, draft });
      } else if (onError) onError(err);
    });
  };

  getFieldDecorator('id', { initialValue: data.id || '' });
  getFieldDecorator('formId', { initialValue: id || '' });
  getFieldDecorator('type', { initialValue: type || '' });

  return (
    <Form onSubmit={handleSubmit} colon={colon} {...formProps}>
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
          {!isEmpty(schema) &&
            schema.map((fieldItem, index) => (
              <Row key={index}>
                <FormItemRenderer
                  formItem={fieldItem}
                  decorator={getFieldDecorator}
                  initialValue={data[fieldItem.field]}
                />
              </Row>
            ))}
          {!isEmpty(schema) && (
            <Row gutter={16}>
              {allowDraft && isDraft(data) && (
                <Col span={12}>
                  <Button
                    onClick={() => setDraft(true)}
                    block
                    type="default"
                    htmlType="submit"
                  >
                    Save Draft
                  </Button>
                </Col>
              )}
              <Col span={allowDraft && isDraft(data) ? 12 : 24}>
                <Button
                  onClick={() => setDraft(false)}
                  block
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          )}
        </Row>
      </Col>
    </Form>
  );
};

export default Form.create({
  name: 'form_renderer',
})(FormRenderer);
