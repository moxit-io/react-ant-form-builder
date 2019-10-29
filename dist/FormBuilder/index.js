'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

require('antd/es/alert/style');

var _alert = _interopRequireDefault(require('antd/es/alert'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

require('antd/es/list/style');

var _list = _interopRequireDefault(require('antd/es/list'));

var _react = _interopRequireWildcard(require('react'));

var _lodash = require('lodash');

var _arrayMove = _interopRequireDefault(require('array-move'));

var _reactSortableHoc = require('react-sortable-hoc');

var _SortableCard = _interopRequireDefault(require('./SortableCard'));

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

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
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

var SortableItem = function SortableItem(_ref) {
  var index = _ref.index,
    value = _ref.value,
    onDelete = _ref.onDelete,
    onChange = _ref.onChange;
  return _react['default'].createElement(_SortableCard['default'], {
    onDelete: onDelete,
    onChange: onChange,
    index: index,
    value: value,
  });
};

var SortableSchema = (0, _reactSortableHoc.SortableContainer)(function(_ref2) {
  var items = _ref2.items,
    header = _ref2.header,
    onChange = _ref2.onChange;
  return _react['default'].createElement(_list['default'], {
    header: header,
    size: 'large',
    dataSource: items,
    renderItem: function renderItem(item, index) {
      return _react['default'].createElement(SortableItem, {
        onChange: onChange,
        onDelete: function onDelete(deletedItem) {
          if (deletedItem) {
            var updatedSchema = items.filter(function(i) {
              return i.field !== deletedItem.field;
            });
            onChange(updatedSchema);
          }
        },
        index: index,
        value: _objectSpread({}, item, {
          index: index,
          items: items,
        }),
      });
    },
  });
});
var emptyField = [
  {
    type: 'input',
    placeholder: '',
    label: '',
    field: (0, _lodash.camelCase)('Question1'),
    rules: [
      {
        required: false,
        message: 'Field is required',
      },
    ],
  },
];

var checkLabels = function checkLabels(items) {
  var notValid = items.filter(function(item) {
    return item.label === '' || item.label === undefined || item.label === null;
  });
  return notValid.length === 0;
};

var SchemaList = _react['default'].forwardRef(function(_ref3, ref) {
  var value = _ref3.value,
    onChange = _ref3.onChange,
    header = _ref3.header;

  // const bottomRef = useRef(null);
  var handleChange = function handleChange(change) {
    return onChange(change);
  };

  return _react['default'].createElement(
    _row['default'],
    null,
    _react['default'].createElement(
      _col['default'],
      {
        // span={22}
        ref: ref,
      },
      _react['default'].createElement(
        _row['default'],
        {
          style: {
            background: '#ECECEC',
          },
        },
        _react['default'].createElement(SortableSchema, {
          items: value,
          onChange: onChange,
          header: header,
          onSortEnd: function onSortEnd(_ref4) {
            var oldIndex = _ref4.oldIndex,
              newIndex = _ref4.newIndex;
            // Re-assigned avoid mutation.
            var updatedSchema = value;
            updatedSchema = (0, _arrayMove['default'])(
              updatedSchema,
              oldIndex,
              newIndex
            );
            handleChange(updatedSchema);
          },
        })
      ),
      _react['default'].createElement(
        _row['default'],
        null,
        _react['default'].createElement(
          _button['default'],
          {
            style: {
              marginTop: 10,
            },
            type: 'primary',
            icon: 'plus',
            title: 'Add new',
            block: true,
            onClick: function onClick() {
              var updatedList = [].concat(_toConsumableArray(value), [
                {
                  type: 'input',
                  label: '',
                  field: (0, _lodash.camelCase)(
                    'Question '.concat(value.length + 1)
                  ),
                  rules: [
                    {
                      required: false,
                      message: 'Field is required',
                    },
                  ],
                },
              ]);
              handleChange(updatedList);
            },
          },
          'Add new question'
        )
      )
    )
  );
});

var FormBuilder = function FormBuilder(_ref5) {
  var onSave = _ref5.onSave,
    _ref5$noSave = _ref5.noSave,
    noSave = _ref5$noSave === void 0 ? false : _ref5$noSave,
    onError = _ref5.onError,
    _ref5$formStructure = _ref5.formStructure,
    formStructure = _ref5$formStructure === void 0 ? {} : _ref5$formStructure,
    _ref5$form = _ref5.form,
    getFieldDecorator = _ref5$form.getFieldDecorator,
    validateFields = _ref5$form.validateFields,
    _ref5$formId = _ref5.formId,
    formId = _ref5$formId === void 0 ? null : _ref5$formId;

  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    errors = _useState2[0],
    setErrors = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    setErrors([]);
    console.log(e);
    e.preventDefault();
    validateFields(function(err, formData) {
      console.log(err);

      if (!err) {
        if (onSave) onSave(formData);
      } else if (onError) {
        setErrors(err.schema.errors);
        onError(err);
      }
    });
  };

  if (formStructure.id)
    getFieldDecorator('id', {
      initialValue: formStructure.id,
    });
  if (formStructure.type)
    getFieldDecorator('type', {
      initialValue: formStructure.type,
    });
  return _react['default'].createElement(
    _react['default'].Fragment,
    null,
    errors.length > 0 &&
      _react['default'].createElement(_alert['default'], {
        type: 'error',
        message: 'Error',
        showIcon: true,
        // eslint-disable-next-line react/jsx-wrap-multilines
        description: _react['default'].createElement(
          'ul',
          null,
          errors.map(function(error, index) {
            return _react['default'].createElement(
              'li',
              {
                key: index,
              },
              error.message
            );
          })
        ),
      }),
    _react['default'].createElement(
      _form['default'],
      {
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            return false;
          }

          return true;
        },
        colon: false,
        onSubmit: handleSubmit,
        noValidate: true,
        id: formId,
      },
      _react['default'].createElement(
        _form['default'].Item,
        {
          label: 'Name',
        },
        getFieldDecorator('name', {
          initialValue: formStructure.name || '',
        })(
          _react['default'].createElement(_input['default'], {
            placeholder: 'Add form name',
          })
        )
      ),
      _react['default'].createElement(
        _form['default'].Item,
        {
          label: 'Description',
        },
        getFieldDecorator('description', {
          initialValue: formStructure.description || '',
        })(
          _react['default'].createElement(_input['default'].TextArea, {
            placeholder: 'Add form description',
            autosize: {
              minRows: 2,
              maxRows: 6,
            },
          })
        )
      ),
      _react['default'].createElement(
        _row['default'],
        null,
        _react['default'].createElement(
          _form['default'].Item,
          {
            validateStatus: null,
            help: null,
          },
          getFieldDecorator('schema', {
            initialValue: !(0, _lodash.isEmpty)(formStructure.schema)
              ? formStructure.schema
              : emptyField,
            rules: [
              {
                validator: function validator(rule, value, callback) {
                  if (!checkLabels(value)) {
                    callback(
                      'Please provide questions. All questions are required.'
                    );
                  }

                  callback();
                },
              },
            ],
          })(_react['default'].createElement(SchemaList, null))
        )
      ),
      _react['default'].createElement(
        'div',
        {
          style: {
            margin: '30 0',
          },
        },
        !noSave &&
          _react['default'].createElement(
            _button['default'],
            {
              htmlType: 'submit',
            },
            'Save'
          )
      )
    )
  );
};

var _default = _form['default'].create({
  name: 'form_builder',
})(FormBuilder);

exports['default'] = _default;
