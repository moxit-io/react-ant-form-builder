'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = exports.FormItemRenderer = void 0;

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

require('antd/es/select/style');

var _select = _interopRequireDefault(require('antd/es/select'));

require('antd/es/radio/style');

var _radio = _interopRequireDefault(require('antd/es/radio'));

require('antd/es/checkbox/style');

var _checkbox = _interopRequireDefault(require('antd/es/checkbox'));

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

var _react = _interopRequireWildcard(require('react'));

var _lodash = require('lodash');

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  if (obj != null) {
    var hasPropertyDescriptor =
      Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === '[object Arguments]'
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
    help = formItem.help,
    allProps = _objectWithoutProperties(formItem, [
      'label',
      'field',
      'type',
      'help',
    ]);

  var fieldProps = (0, _lodash.omit)(allProps, 'placeholder'); // Select list

  if (type === 'select') {
    return _react['default'].createElement(
      _form['default'].Item,
      {
        label: label,
        help: help,
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
        help: help,
      },
      decorator(
        field,
        _objectSpread({}, fieldProps, {
          valuePropName: 'checked',
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
      help: help,
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
    schema = _ref2$formStructure.schema,
    formProps = _ref2.formProps,
    _ref2$allowDraft = _ref2.allowDraft,
    allowDraft = _ref2$allowDraft === void 0 ? true : _ref2$allowDraft,
    _ref2$allowSubmit = _ref2.allowSubmit,
    allowSubmit = _ref2$allowSubmit === void 0 ? true : _ref2$allowSubmit,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled;

  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    draft = _useState2[0],
    setDraft = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    validateFields(function(err, formData) {
      if (!err) {
        if (onSave)
          onSave({
            formData: formData,
            draft: draft,
          });
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
    _form['default'],
    _extends(
      {
        onSubmit: handleSubmit,
        colon: colon,
      },
      formProps
    ),
    _react['default'].createElement(
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
          'fieldset',
          {
            disabled: disabled,
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
            })
        ),
        !(0, _lodash.isEmpty)(schema) &&
          allowSubmit &&
          _react['default'].createElement(
            _row['default'],
            {
              gutter: 16,
            },
            allowDraft &&
              _react['default'].createElement(
                _col['default'],
                {
                  style: {
                    marginBottom: 10,
                  },
                  lg: {
                    span: allowDraft ? 12 : 24,
                  },
                  md: {
                    span: allowDraft ? 12 : 24,
                  },
                  sm: {
                    span: 24,
                  },
                  xs: {
                    span: 24,
                  },
                },
                _react['default'].createElement(
                  _button['default'],
                  {
                    onClick: function onClick() {
                      return setDraft(true);
                    },
                    block: true,
                    icon: 'edit',
                    type: 'dashed',
                    htmlType: 'submit',
                  },
                  'Save Draft'
                )
              ),
            _react['default'].createElement(
              _col['default'],
              {
                style: {
                  marginBottom: 10,
                },
                lg: {
                  span: allowDraft ? 12 : 24,
                },
                md: {
                  span: allowDraft ? 12 : 24,
                },
                sm: {
                  span: 24,
                },
                xs: {
                  span: 24,
                },
              },
              _react['default'].createElement(
                _button['default'],
                {
                  onClick: function onClick() {
                    return setDraft(false);
                  },
                  block: true,
                  type: 'primary',
                  icon: 'save',
                  htmlType: 'submit',
                },
                'Submit'
              )
            )
          )
      )
    )
  );
};

var _default = _form['default'].create({
  name: 'form_renderer',
})(FormRenderer);

exports['default'] = _default;
