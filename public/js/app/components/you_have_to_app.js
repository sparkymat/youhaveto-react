'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YouHaveToApp = (function (_React$Component) {
  _inherits(YouHaveToApp, _React$Component);

  function YouHaveToApp(props) {
    _classCallCheck(this, YouHaveToApp);

    _get(Object.getPrototypeOf(YouHaveToApp.prototype), 'constructor', this).call(this, props);

    this.state = {
      currentUser: null
    };
  }

  _createClass(YouHaveToApp, [{
    key: 'render',
    value: function render() {
      if (this.state.currentUser) {
        return React.createElement(
          'div',
          null,
          React.createElement(MainContainer, null)
        );
      } else {
        return React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(LoginContainer, null)
        );
      }
    }
  }]);

  return YouHaveToApp;
})(React.Component);
