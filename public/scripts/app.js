'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _logo = require('./logo.svg');

var _logo2 = _interopRequireDefault(_logo);

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',


    //   constructor(props) {
    //     super(props);
    //     this.somefilterfunction = this.somefilterfunction.bind(this);
    //   }


    // somefilterfunction() {

    //   const Array.prototype.myFilter = (callback, context) => {
    //       let arr = [];
    //       for (let i = 0; i < this.length; i++) {
    //           if (callback.call(context, this[i], i, this))
    //               arr.push(this[i]);
    //       }
    //       return arr;
    //   };

    //   let numbers = [1, 20, 30, 80, 2, 9, 3];
    //   let newNum = numbers.myFilter(function(n) {
    //     return n >= 10;
    //   });

    // console.log(newNum); // [ 20, 30, 80 ]

    // };

    // somefilterfunction();


    // Array.prototype.myReduce = function(callback, initialVal) {
    //     var accumulator = (initialVal === undefined) ? undefined : initialVal;
    //     for (var i = 0; i < this.length; i++) {
    //         if (accumulator !== undefined)
    //             accumulator = callback.call(undefined, accumulator, this[i], i, this);
    //         else
    //             accumulator = this[i];
    //     }
    //     return accumulator;
    // };

    // //tests
    // var numbers3 = [20, 20, 2, 3];
    // var total = numbers3.myReduce(function(a, b) {
    //     return a + b;
    // }, 10);
    // console.log(total); // 55

    // var flattened = [
    //     [0, 1],
    //     [2, 3],
    //     [4, 5]
    // ].reduce(function(a, b) {
    //     return a.concat(b);
    // });
    // console.log(flattened); //[ 0, 1, 2, 3, 4, 5 ]


    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          'header',
          { className: 'App-header' },
          _react2.default.createElement('img', { src: _logo2.default, className: 'App-logo', alt: 'logo' }),
          _react2.default.createElement(
            'h1',
            { className: 'App-title' },
            'Welcome to React'
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'App-intro' },
          'To get started, edit ',
          _react2.default.createElement(
            'code',
            null,
            'src/App.js'
          ),
          ' and save to reload.'
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
