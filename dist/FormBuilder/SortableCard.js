'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _card = _interopRequireDefault(require('antd/es/card'));

var _select = _interopRequireDefault(require('antd/es/select'));

var _col = _interopRequireDefault(require('antd/es/col'));

var _form = _interopRequireDefault(require('antd/es/form'));

var _input = _interopRequireDefault(require('antd/es/input'));

var _switch = _interopRequireDefault(require('antd/es/switch'));

var _icon = _interopRequireDefault(require('antd/es/icon'));

var _row = _interopRequireDefault(require('antd/es/row'));

var _react = _interopRequireDefault(require('react'));

var _reactSortableHoc = require('react-sortable-hoc');

var _lodash = require('lodash');

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _RenderOptions = _interopRequireDefault(require('./RenderOptions'));

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

var DragHandle = (0, _reactSortableHoc.sortableHandle)(function() {
  return _react['default'].createElement(
    _row['default'],
    {
      className: 'drag-handle',
      type: 'flex',
      align: 'middle',
      justify: 'center',
    },
    _react['default'].createElement('span', null, ':::')
  );
});

var getRule = function getRule(rules) {
  var required = false;
  if (rules && rules.length)
    required = (0, _lodash.find)(rules, function(r) {
      return r.required === true || r.required === false;
    });
  return required;
};

var SortableCard = (0, _reactSortableHoc.SortableElement)(function(_ref) {
  var _ref$value = _ref.value,
    index = _ref$value.index,
    items = _ref$value.items,
    value = _objectWithoutProperties(_ref$value, ['index', 'items']),
    onDelete = _ref.onDelete,
    onChange = _ref.onChange;

  // Bubble up changes to parent.
  var handleChange = function handleChange() {
    var field =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var change = arguments.length > 1 ? arguments[1] : undefined;
    // Updated schema with changes.
    var allFields = items; // Update specific property.

    if (field && change) {
      allFields[index] = _objectSpread(
        {},
        value,
        _defineProperty({}, field, change)
      );
    } else {
      // replace property
      allFields[index] = change;
    }

    if (onChange) onChange(allFields);
  };

  var handleOptionChange = function handleOptionChange(change) {
    handleChange('options', change);
  };

  return _react['default'].createElement(
    _row['default'],
    {
      type: 'flex',
      style: {
        zIndex: 1000,
        margin: 10,
      },
    },
    _react['default'].createElement(
      _card['default'],
      {
        title: _react['default'].createElement(DragHandle, null),
        style: {
          width: '100%',
        },
        actions: [
          _react['default'].createElement(_icon['default'], {
            type: 'delete',
            key: 'delete',
            onClick: function onClick() {
              if (onDelete) onDelete(value);
            },
          }),
          _react['default'].createElement(_switch['default'], {
            checkedChildren: 'Required',
            unCheckedChildren: 'Not required',
            checked: getRule(value.rules).required,
            onChange: function onChange(checked) {
              if (value && value.rules && value.rules.length) {
                var ruleIndex = value.rules.indexOf(getRule(value.rules));

                if (ruleIndex > -1) {
                  // Copy previous rule.
                  var updatedRules = value.rules; // Update rule

                  updatedRules[ruleIndex].required = checked;
                  updatedRules[ruleIndex].message = 'Field is required';
                  handleChange('schema', updatedRules);
                }
              }
            },
          }),
          _react['default'].createElement(_icon['default'], {
            type: 'ellipsis',
            key: 'ellipsis',
          }),
        ],
      },
      _react['default'].createElement(
        _row['default'],
        {
          gutter: 16,
        },
        _react['default'].createElement(
          _col['default'],
          {
            span: 18,
          },
          _react['default'].createElement(
            _form['default'].Item,
            {
              required: true,
              label: 'Question',
            },
            value && value.type === 'textarea'
              ? _react['default'].createElement(_input['default'].TextArea, {
                  placeholder: 'Question',
                  value: value.label || '',
                  autosize: {
                    minRows: 2,
                    maxRows: 6,
                  },
                  onChange: function onChange(e) {
                    handleChange('label', e.target.value);
                  },
                })
              : _react['default'].createElement(_input['default'], {
                  placeholder: 'Question',
                  value: value.label || '',
                  onChange: function onChange(e) {
                    handleChange('label', e.target.value);
                  },
                })
          ),
          _react['default'].createElement(
            _form['default'].Item,
            null,
            _react['default'].createElement(_RenderOptions['default'], {
              value: value,
              onChange: handleOptionChange,
            })
          )
        ),
        _react['default'].createElement(
          _col['default'],
          {
            span: 6,
          },
          _react['default'].createElement(
            _row['default'],
            null,
            _react['default'].createElement(
              _form['default'].Item,
              {
                required: true,
                label: 'Type',
              },
              _react['default'].createElement(
                _select['default'],
                {
                  value: value.type || '',
                  style: {
                    width: '100%',
                  },
                  onSelect: function onSelect(selected) {
                    // On change, reset.
                    var newField = {
                      label: 'Question'.concat(items.length),
                      field: (0, _lodash.camelCase)(
                        'Question '.concat(items.length)
                      ),
                      type: selected,
                      rules: [
                        {
                          required: false,
                          message: 'Field is required',
                        },
                      ],
                    };

                    if (
                      selected === 'checkbox' ||
                      selected === 'radio' ||
                      selected === 'select'
                    ) {
                      newField.options = [];
                    }

                    handleChange('', newField);
                  },
                },
                _react['default'].createElement(
                  _select['default'].Option,
                  {
                    key: 'input',
                    value: 'input',
                  },
                  _react['default'].createElement(
                    _reactFontawesome.FontAwesomeIcon,
                    {
                      icon: _freeSolidSvgIcons.faTextWidth,
                    }
                  ),
                  _react['default'].createElement(
                    'span',
                    {
                      style: {
                        marginLeft: 10,
                      },
                    },
                    'Short answer'
                  )
                ),
                _react['default'].createElement(
                  _select['default'].Option,
                  {
                    key: 'textarea',
                    value: 'textarea',
                  },
                  _react['default'].createElement(
                    _reactFontawesome.FontAwesomeIcon,
                    {
                      icon: _freeSolidSvgIcons.faAlignLeft,
                    }
                  ),
                  _react['default'].createElement(
                    'span',
                    {
                      style: {
                        marginLeft: 10,
                      },
                    },
                    'Paragraph'
                  )
                ),
                _react['default'].createElement(
                  _select['default'].Option,
                  {
                    key: 'radio',
                    value: 'radio',
                  },
                  _react['default'].createElement(
                    _reactFontawesome.FontAwesomeIcon,
                    {
                      icon: _freeSolidSvgIcons.faDotCircle,
                    }
                  ),
                  _react['default'].createElement(
                    'span',
                    {
                      style: {
                        marginLeft: 10,
                      },
                    },
                    'Multiple choice'
                  )
                ),
                _react['default'].createElement(
                  _select['default'].Option,
                  {
                    key: 'checkbox',
                    value: 'checkbox',
                  },
                  _react['default'].createElement(
                    _reactFontawesome.FontAwesomeIcon,
                    {
                      icon: _freeSolidSvgIcons.faCheckSquare,
                    }
                  ),
                  _react['default'].createElement(
                    'span',
                    {
                      style: {
                        marginLeft: 10,
                      },
                    },
                    'Checkboxes'
                  )
                ),
                _react['default'].createElement(
                  _select['default'].Option,
                  {
                    key: 'select',
                    value: 'select',
                  },
                  _react['default'].createElement(
                    _reactFontawesome.FontAwesomeIcon,
                    {
                      icon: _freeSolidSvgIcons.faChevronCircleDown,
                    }
                  ),
                  _react['default'].createElement(
                    'span',
                    {
                      style: {
                        marginLeft: 10,
                      },
                    },
                    'Dropdown'
                  )
                ),
                _react['default'].createElement(
                  _select['default'].Option,
                  {
                    key: 'confirm',
                    value: 'confirm',
                  },
                  _react['default'].createElement(
                    _reactFontawesome.FontAwesomeIcon,
                    {
                      icon: _freeSolidSvgIcons.faCheck,
                    }
                  ),
                  _react['default'].createElement(
                    'span',
                    {
                      style: {
                        marginLeft: 10,
                      },
                    },
                    'Confirm'
                  )
                )
              )
            )
          )
        )
      )
    )
  );
});

var _default = _react['default'].memo(SortableCard);

exports['default'] = _default;
