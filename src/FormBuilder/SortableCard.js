import React, { useState, useEffect } from 'react';
import { SortableElement, sortableHandle } from 'react-sortable-hoc';
import { Card, Switch, Row, Icon, Input, Form } from 'antd';
import { isEmpty } from 'lodash';

const DragHandle = sortableHandle(() => (
  <Row className="drag-handle" type="flex" align="middle" justify="center">
    <span>:::</span>
  </Row>
));

const SortableCard = SortableElement(({ value, onDelete = null }) => {
  const [fieldProperty, setFieldProperty] = useState({
    label: '',
    type: '',
    rules: [],
  });

  useEffect(() => {
    setFieldProperty(value);
  }, [value]);

  return (
    <Card
      title={<DragHandle />}
      style={{ width: '100%', marginTop: 16 }}
      actions={[
        <Icon
          type="delete"
          key="delete"
          onClick={() => {
            if (onDelete) onDelete(fieldProperty);
          }}
        />,

        <Switch
          checkedChildren="Required"
          unCheckedChildren="Not required"
          onChange={required => {
            setFieldProperty({
              ...fieldProperty,
              rules: [...fieldProperty.rules, required],
            });
          }}
        />,
        <Icon type="ellipsis" key="ellipsis" />,
      ]}
    >
      <Form.Item required label="Question">
        {!isEmpty(fieldProperty.label) && fieldProperty.label.length > 255 ? (
          <Input.TextArea
            placeholder="Question"
            value={fieldProperty.label || ''}
            autosize={{ minRows: 2, maxRows: 6 }}
            onChange={e => {
              setFieldProperty({ ...fieldProperty, label: e.target.value });
            }}
          />
        ) : (
          <Input
            placeholder="Question"
            value={fieldProperty.label || ''}
            onChange={e => {
              setFieldProperty({ ...fieldProperty, label: e.target.value });
            }}
          />
        )}
      </Form.Item>
    </Card>
  );
});

export default React.memo(SortableCard);
