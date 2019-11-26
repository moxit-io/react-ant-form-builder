import React, { useState } from 'react';
import { Radio, Button, Checkbox, Input, Col, Row } from 'antd';
import { filter } from 'lodash';

const RenderOptions = ({ value: { type, options = [] }, onChange }) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [inputValue, setInputValue] = useState('');

  const addNewButton = (
    <Button
      type="ghost"
      title="Add"
      icon="plus"
      size="small"
      style={{ marginTop: 10 }}
      onClick={() => {
        const newOptions = [
          ...options,
          {
            label: `Option ${options.length + 1}`,
            value: ``,
            placeholder: `Option ${options.length + 1}`,
          },
        ];
        setClickedIndex(-1);
        onChange(newOptions);
      }}
    >
      ADD NEW
    </Button>
  );

  const removeButton = removed => (
    <Button
      type="link"
      icon="close"
      size="small"
      style={{ marginLeft: 10 }}
      onClick={() => {
        const newOptions = filter(options, o => o.label !== removed.value);
        onChange(newOptions);
      }}
    />
  );

  return (
    <div>
      {options.map((option, index) => {
        return (
          <div key={index}>
            <Row type="flex" justify="start" align="middle" gutter={16}>
              <Col span={1}>
                {type === 'radio' && <Radio disabled />}
                {type === 'checkbox' && <Checkbox disabled />}
                {type === 'select' && <span>{index + 1}</span>}
              </Col>
              <Col span={7}>
                {index !== clickedIndex && (
                  <Button
                    type="dashed"
                    block
                    onClick={() => {
                      setInputValue(option.value);
                      setClickedIndex(index);
                    }}
                  >
                    {option.label}
                  </Button>
                )}
                {index === clickedIndex && (
                  <Input
                    value={inputValue}
                    placeholder={options[clickedIndex].placeholder}
                    style={{
                      width: 300,
                    }}
                    onBlur={() => {
                      const newOptions = options;
                      newOptions[index].label =
                        inputValue || newOptions[index].placeholder;
                      newOptions[index].value = inputValue;
                      setClickedIndex(-1);
                      setInputValue('');
                      onChange(newOptions);
                    }}
                    onChange={e => {
                      setInputValue(e.target.value);
                    }}
                  />
                )}
              </Col>
              <Col span={4}>
                {index !== clickedIndex && removeButton(option)}
              </Col>
            </Row>
          </div>
        );
      })}
      {(type === 'checkbox' || type === 'radio' || type === 'select') &&
        addNewButton}
    </div>
  );
};

export default React.memo(RenderOptions);
