'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = exports.FormItemRenderer = void 0;

var _react = _interopRequireDefault(require('react'));

var _antd = require('antd');

var _lodash = require('lodash');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var selectFormElement = function selectFormElement(type) {
  switch (type) {
    case 'input':
      return _antd.Input;

    case 'textarea':
      return _antd.Input.TextArea;

    case 'password':
      return _antd.Input.Password;

    case 'checkbox':
      return _antd.Checkbox.Group;

    case 'radio':
      return _antd.Radio.Group;

    default:
      return null;
  }
};

var FormItemRenderer = function FormItemRenderer(_ref) {
  var formItem = _ref.formItem,
    decorator = _ref.decorator,
    initialValue = _ref.initialValue;

  var label = formItem.label,
    field = formItem.field,
    type = formItem.type,
    fieldProps = _objectWithoutProperties(formItem, ['label', 'field', 'type']); // Select list

  if (type === 'select') {
    return _react['default'].createElement(
      _antd.Form.Item,
      {
        label: label,
        help: fieldProps.help || '',
      },
      decorator(
        field,
        _objectSpread({}, fieldProps, {
          initialValue: initialValue || [],
        })
      )(
        _react['default'].createElement(
          _antd.Select,
          fieldProps,
          fieldProps.options &&
            fieldProps.options.map(function(item) {
              return _react['default'].createElement(
                _antd.Select.Option,
                {
                  key: item.value,
                  value: item.value,
                },
                item.label
              );
            })
        )
      )
    );
  } // Confirm checkbox

  if (type === 'confirm') {
    return _react['default'].createElement(
      _antd.Form.Item,
      {
        label: '',
        help: fieldProps.help || '',
      },
      decorator(
        field,
        _objectSpread({}, fieldProps, {
          initialValue: initialValue || false,
        })
      )(_react['default'].createElement(_antd.Checkbox, null, label))
    );
  } // Others

  var FormElement = selectFormElement(type);
  if (!FormElement) return null;
  return _react['default'].createElement(
    _antd.Form.Item,
    {
      labelAlign: fieldProps.labelAlign || 'left',
      label: label,
      help: fieldProps.help || '',
    },
    decorator(
      field,
      _objectSpread({}, fieldProps, {
        initialValue: initialValue,
      })
    )(_react['default'].createElement(FormElement, fieldProps))
  );
};

exports.FormItemRenderer = FormItemRenderer;

var FormRenderer = function FormRenderer(_ref2) {
  var _ref2$colon = _ref2.colon,
    colon = _ref2$colon === void 0 ? false : _ref2$colon,
    _ref2$form = _ref2.form,
    getFieldDecorator = _ref2$form.getFieldDecorator,
    validateFields = _ref2$form.validateFields,
    _ref2$data = _ref2.data,
    data = _ref2$data === void 0 ? {} : _ref2$data,
    onSave = _ref2.onSave,
    onError = _ref2.onError,
    _ref2$formStructure = _ref2.formStructure,
    id = _ref2$formStructure.id,
    type = _ref2$formStructure.type,
    name = _ref2$formStructure.name,
    description = _ref2$formStructure.description,
    schema = _ref2$formStructure.schema;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    validateFields(function(err, formData) {
      if (!err) {
        if (onSave) onSave(formData);
      } else if (onError) onError(err);
    });
  };

  getFieldDecorator('id', {
    initialValue: data.id || '',
  });
  getFieldDecorator('formId', {
    initialValue: id || '',
  });
  getFieldDecorator('type', {
    initialValue: type || '',
  });
  return _react['default'].createElement(
    _antd.Col,
    null,
    _react['default'].createElement(
      _antd.Row,
      null,
      name &&
        _react['default'].createElement(
          _antd.Row,
          null,
          _react['default'].createElement('h2', null, name)
        ),
      description &&
        _react['default'].createElement(
          _antd.Row,
          null,
          _react['default'].createElement('p', null, description)
        ),
      _react['default'].createElement(
        _antd.Form,
        {
          onSubmit: handleSubmit,
          colon: colon,
        },
        !(0, _lodash.isEmpty)(schema) &&
          schema.map(function(fieldItem, index) {
            return _react['default'].createElement(
              _antd.Row,
              {
                key: index,
              },
              _react['default'].createElement(FormItemRenderer, {
                formItem: fieldItem,
                decorator: getFieldDecorator,
                initialValue: data[fieldItem.field],
              })
            );
          }),
        !(0, _lodash.isEmpty)(schema) &&
          _react['default'].createElement(
            'div',
            null,
            _react['default'].createElement(
              _antd.Button,
              {
                htmlType: 'submit',
              },
              'Submit'
            )
          )
      )
    )
  );
};

var _default = _antd.Form.create('form_renderer')(FormRenderer);

exports['default'] = _default;
