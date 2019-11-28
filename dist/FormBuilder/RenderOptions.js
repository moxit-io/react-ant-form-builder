'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/checkbox/style');

var _checkbox = _interopRequireDefault(require('antd/es/checkbox'));

require('antd/es/radio/style');

var _radio = _interopRequireDefault(require('antd/es/radio'));

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

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

var RenderOptions = function RenderOptions(_ref) {
  var _ref$value = _ref.value,
    type = _ref$value.type,
    _ref$value$options = _ref$value.options,
    options = _ref$value$options === void 0 ? [] : _ref$value$options,
    onChange = _ref.onChange;

  var _useState = (0, _react.useState)(-1),
    _useState2 = _slicedToArray(_useState, 2),
    clickedIndex = _useState2[0],
    setClickedIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];

  var addNewButton = _react['default'].createElement(
    _button['default'],
    {
      type: 'ghost',
      title: 'Add',
      icon: 'plus',
      size: 'small',
      style: {
        marginTop: 10,
      },
      onClick: function onClick() {
        var newOptions = [].concat(_toConsumableArray(options), [
          {
            field: 'Option '.concat(options.length + 1),
            value: '',
            label: '',
          },
        ]);
        setClickedIndex(-1);
        onChange(newOptions);
      },
    },
    'ADD NEW'
  );

  var onOptionsChange = function onOptionsChange(newOptions) {
    newOptions.forEach(function(e, index) {
      e.field = 'Option '.concat(index + 1);
    });
    onChange(newOptions);
  };

  var removeButton = function removeButton(removed) {
    return _react['default'].createElement(_button['default'], {
      type: 'link',
      icon: 'close',
      size: 'small',
      style: {
        marginLeft: 10,
      },
      onClick: function onClick() {
        var newOptions = (0, _lodash.filter)(options, function(o) {
          return o.field !== removed.field;
        });
        onOptionsChange(newOptions);
      },
    });
  };

  return _react['default'].createElement(
    'div',
    null,
    options.map(function(option, index) {
      return _react['default'].createElement(
        'div',
        {
          style: {
            marginTop: '5px',
          },
          key: index,
        },
        _react['default'].createElement(
          _row['default'],
          {
            type: 'flex',
            justify: 'start',
            align: 'middle',
            gutter: 16,
          },
          _react['default'].createElement(
            _col['default'],
            {
              span: 1,
            },
            type === 'radio' &&
              _react['default'].createElement(_radio['default'], {
                disabled: true,
              }),
            type === 'checkbox' &&
              _react['default'].createElement(_checkbox['default'], {
                disabled: true,
              }),
            type === 'select' &&
              _react['default'].createElement('span', null, index + 1)
          ),
          _react['default'].createElement(
            _col['default'],
            {
              span: 10,
            },
            index !== clickedIndex &&
              _react['default'].createElement(
                _button['default'],
                {
                  type: 'dashed',
                  block: true,
                  style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                  onClick: function onClick() {
                    setInputValue(option.value);
                    setClickedIndex(index);
                  },
                },
                option.value
                  ? option.value
                  : _react['default'].createElement(
                      'span',
                      {
                        style: {
                          color: '#ccc',
                        },
                      },
                      'Click to edit '.concat(option.field)
                    )
              ),
            index === clickedIndex &&
              _react['default'].createElement(_input['default'], {
                value: inputValue,
                autoFocus: true,
                placeholder: options[clickedIndex].field,
                style: {
                  width: 300,
                },
                onBlur: function onBlur() {
                  var newOptions = options;
                  newOptions[index].value = inputValue;
                  newOptions[index].label =
                    inputValue || newOptions[index].field;
                  setClickedIndex(-1);
                  setInputValue('');
                  newOptions = (0, _lodash.uniqBy)(newOptions, function(
                    checkOption
                  ) {
                    if (checkOption.value === '') {
                      return checkOption.field;
                    }

                    return checkOption.value;
                  });
                  onOptionsChange(newOptions);
                },
                onChange: function onChange(e) {
                  setInputValue(e.target.value);
                },
              })
          ),
          _react['default'].createElement(
            _col['default'],
            {
              span: 1,
            },
            index !== clickedIndex && removeButton(option)
          )
        )
      );
    }),
    (type === 'checkbox' || type === 'radio' || type === 'select') &&
      addNewButton
  );
};

var _default = _react['default'].memo(RenderOptions);

exports['default'] = _default;
