import React, { useRef, useState } from 'react';
import { Radio, Button, Checkbox, Input, Col, Row } from 'antd';
import { filter } from 'lodash';

const RenderOptions = ({ value: { type, options }, onChange }) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const inputRef = useRef(null);

  console.log(clickedIndex);

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
            value: `Option ${options.length + 1}`,
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
      style={{ marginLeft: 20 }}
      onClick={() => {
        const newOptions = filter(options, o => o.label !== removed.value);
        onChange(newOptions);
      }}
    />
  );

  const selectOption = () => {
    if (type === 'radio')
      return (
        <div>
          {options.map((option, index) => {
            return (
              <div key={option.label}>
                <Row type="flex" justify="start" align="middle" gutter={16}>
                  <Col span={1}>
                    <Radio disabled />
                  </Col>
                  <Col span={7}>
                    {index !== clickedIndex && (
                      <Button
                        type="dashed"
                        block
                        onClick={() => {
                          console.log(inputRef[index]);
                          setClickedIndex(index);
                        }}
                      >
                        {option.label}
                      </Button>
                    )}
                    {index === clickedIndex && (
                      <Input
                        ref={inputRef[index]}
                        style={{ width: 300 }}
                        value={option.label}
                        onBlur={() => setClickedIndex(-1)}
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
          {addNewButton}
        </div>
      );
    if (type === 'checkbox')
      return (
        <div>
          {options.map(option => (
            <div key={option.label}>
              <Checkbox disabled />
              <span style={{ padding: 20 }}>{option.label}</span>
              {removeButton(option)}
            </div>
          ))}
          {addNewButton}
        </div>
      );
    if (type === 'select')
      return (
        <div>
          {options.map((option, index) => (
            <div key={option.label}>
              <span>{index + 1}</span>
              <span style={{ padding: 20 }}>{option.label}</span>
              {removeButton(option)}
            </div>
          ))}
          {addNewButton}
        </div>
      );
    return <></>;
  };
  return <div>{selectOption()}</div>;
};

export default React.memo(RenderOptions);
