'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(require('react'));

var _antd = require('antd');

var _lodash = require('lodash');

var _arrayMove = _interopRequireDefault(require('array-move'));

var _reactSortableHoc = require('react-sortable-hoc');

require('./assets/style.css');

var _SortableCard = _interopRequireDefault(require('./SortableCard'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
  return _react['default'].createElement(_antd.List, {
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
    placeholder: 'Add question',
    label: 'Question1',
    field: (0, _lodash.camelCase)('Question1'),
    rules: [
      {
        required: false,
        message: 'Field is required',
      },
    ],
  },
];

var SchemaList = _react['default'].forwardRef(function(_ref3, ref) {
  var value = _ref3.value,
    onChange = _ref3.onChange,
    header = _ref3.header;
  var bottomRef = (0, _react.useRef)(null);

  var handleChange = function handleChange(change) {
    return onChange(change);
  };

  return _react['default'].createElement(
    _antd.Row,
    null,
    _react['default'].createElement(
      _antd.Col,
      {
        span: 22,
        ref: ref,
      },
      _react['default'].createElement(
        _antd.Row,
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
      )
    ),
    _react['default'].createElement(
      _antd.Col,
      null,
      _react['default'].createElement(
        _antd.Row,
        {
          type: 'flex',
          justify: 'center',
        },
        _react['default'].createElement(
          _antd.Affix,
          {
            offsetTop: 400,
          },
          _react['default'].createElement(_antd.Button, {
            icon: 'plus',
            onClick: function onClick() {
              var updatedList = [].concat(_toConsumableArray(value), [
                {
                  type: 'input',
                  placeholder: 'Add question',
                  label: 'Question'.concat(value.length + 1),
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
              setTimeout(function() {
                if (bottomRef.current) window.scrollTo(0, ref);
              }, 200);
            },
          })
        ),
        _react['default'].createElement('div', {
          ref: bottomRef,
        })
      )
    )
  );
});

var FormBuilder = function FormBuilder(_ref5) {
  var onSave = _ref5.onSave,
    onError = _ref5.onError,
    _ref5$formStructure = _ref5.formStructure,
    formStructure = _ref5$formStructure === void 0 ? {} : _ref5$formStructure,
    _ref5$form = _ref5.form,
    getFieldDecorator = _ref5$form.getFieldDecorator,
    validateFields = _ref5$form.validateFields;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    validateFields(function(err, formData) {
      if (!err) {
        if (onSave) onSave(formData);
      } else if (onError) onError(err);
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
    _antd.Form,
    {
      colon: false,
      onSubmit: handleSubmit,
      noValidate: true,
    },
    _react['default'].createElement(
      _antd.Form.Item,
      {
        label: 'Name',
      },
      getFieldDecorator('name', {
        initialValue: formStructure.name || '',
      })(
        _react['default'].createElement(_antd.Input, {
          placeholder: 'Add form name',
        })
      )
    ),
    _react['default'].createElement(
      _antd.Form.Item,
      {
        label: 'Description',
      },
      getFieldDecorator('description', {
        initialValue: formStructure.description || '',
      })(
        _react['default'].createElement(_antd.Input.TextArea, {
          placeholder: 'Add form description',
          autosize: {
            minRows: 2,
            maxRows: 6,
          },
        })
      )
    ),
    _react['default'].createElement(
      _antd.Row,
      null,
      _react['default'].createElement(
        _antd.Form.Item,
        null,
        getFieldDecorator('schema', {
          initialValue: !(0, _lodash.isEmpty)(formStructure.schema)
            ? formStructure.schema
            : emptyField,
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
      _react['default'].createElement(
        _antd.Button,
        {
          htmlType: 'submit',
        },
        'Save'
      )
    )
  );
};

var _default = _antd.Form.create('form_builder')(FormBuilder);

exports['default'] = _default;
