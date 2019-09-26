'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = exports.FormItemRenderer = void 0;

require('antd/es/col/style/css');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/button/style/css');

var _button = _interopRequireDefault(require('antd/es/button'));

require('antd/es/row/style/css');

var _row = _interopRequireDefault(require('antd/es/row'));

require('antd/es/form/style/css');

var _form = _interopRequireDefault(require('antd/es/form'));

require('antd/es/select/style/css');

var _select = _interopRequireDefault(require('antd/es/select'));

require('antd/es/radio/style/css');

var _radio = _interopRequireDefault(require('antd/es/radio'));

require('antd/es/checkbox/style/css');

var _checkbox = _interopRequireDefault(require('antd/es/checkbox'));

require('antd/es/input/style/css');

var _input = _interopRequireDefault(require('antd/es/input'));

var _react = _interopRequireDefault(require('react'));

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
      return _input['default'];

    case 'textarea':
      return _input['default'].TextArea;

    case 'password':
      return _input['default'].Password;

    case 'checkbox':
      return _checkbox['default'].Group;

    case 'radio':
      return _radio['default'].Group;

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
      _form['default'].Item,
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
          _select['default'],
          fieldProps,
          fieldProps.options &&
            fieldProps.options.map(function(item) {
              return _react['default'].createElement(
                _select['default'].Option,
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
      _form['default'].Item,
      {
        label: '',
        help: fieldProps.help || '',
      },
      decorator(
        field,
        _objectSpread({}, fieldProps, {
          initialValue: initialValue || false,
        })
      )(_react['default'].createElement(_checkbox['default'], null, label))
    );
  } // Others

  var FormElement = selectFormElement(type);
  if (!FormElement) return null;
  return _react['default'].createElement(
    _form['default'].Item,
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
    _col['default'],
    null,
    _react['default'].createElement(
      _row['default'],
      null,
      name &&
        _react['default'].createElement(
          _row['default'],
          null,
          _react['default'].createElement('h2', null, name)
        ),
      description &&
        _react['default'].createElement(
          _row['default'],
          null,
          _react['default'].createElement('p', null, description)
        ),
      _react['default'].createElement(
        _form['default'],
        {
          onSubmit: handleSubmit,
          colon: colon,
        },
        !(0, _lodash.isEmpty)(schema) &&
          schema.map(function(fieldItem, index) {
            return _react['default'].createElement(
              _row['default'],
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
              _button['default'],
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

var _default = _form['default'].create('form_renderer')(FormRenderer);

exports['default'] = _default;
