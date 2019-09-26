'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(require('react'));

var _antd = require('antd');

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
    _antd.Button,
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
            label: 'Option '.concat(options.length + 1),
            value: 'Option '.concat(options.length + 1),
          },
        ]);
        setClickedIndex(-1);
        onChange(newOptions);
      },
    },
    'ADD NEW'
  );

  var removeButton = function removeButton(removed) {
    return _react['default'].createElement(_antd.Button, {
      type: 'link',
      icon: 'close',
      size: 'small',
      style: {
        marginLeft: 10,
      },
      onClick: function onClick() {
        var newOptions = (0, _lodash.filter)(options, function(o) {
          return o.label !== removed.value;
        });
        onChange(newOptions);
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
          key: index,
        },
        _react['default'].createElement(
          _antd.Row,
          {
            type: 'flex',
            justify: 'start',
            align: 'middle',
            gutter: 16,
          },
          _react['default'].createElement(
            _antd.Col,
            {
              span: 1,
            },
            type === 'radio' &&
              _react['default'].createElement(_antd.Radio, {
                disabled: true,
              }),
            type === 'checkbox' &&
              _react['default'].createElement(_antd.Checkbox, {
                disabled: true,
              }),
            type === 'select' &&
              _react['default'].createElement('span', null, index + 1)
          ),
          _react['default'].createElement(
            _antd.Col,
            {
              span: 7,
            },
            index !== clickedIndex &&
              _react['default'].createElement(
                _antd.Button,
                {
                  type: 'dashed',
                  block: true,
                  onClick: function onClick() {
                    setInputValue(option.label);
                    setClickedIndex(index);
                  },
                },
                option.label
              ),
            index === clickedIndex &&
              _react['default'].createElement(_antd.Input, {
                value: inputValue,
                style: {
                  width: 300,
                },
                onBlur: function onBlur() {
                  var newOptions = options;
                  newOptions[index].label = inputValue;
                  newOptions[index].value = inputValue;
                  setClickedIndex(-1);
                  setInputValue('');
                  onChange(newOptions);
                },
                onChange: function onChange(e) {
                  setInputValue(e.target.value);
                },
              })
          ),
          _react['default'].createElement(
            _antd.Col,
            {
              span: 4,
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
