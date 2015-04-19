'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var LoginPopup = (function (_React$Component) {
  function LoginPopup(props) {
    _classCallCheck(this, LoginPopup);

    _get(Object.getPrototypeOf(LoginPopup.prototype), 'constructor', this).call(this, props);
    this.state = {};

    window.yht.subscribe('loginClicked', this);
  }

  _inherits(LoginPopup, _React$Component);

  _createClass(LoginPopup, [{
    key: 'onLoginClicked',
    value: function onLoginClicked() {
      $('.login-popup').openModal();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'login-popup modal' },
        React.createElement(
          'div',
          { className: 'modal-content row' },
          React.createElement(
            'h4',
            { className: 's12 m12 l12 center-align' },
            'Login'
          ),
          React.createElement(
            'div',
            { className: 'input-field col s12' },
            React.createElement('i', { className: 'mdi-content-mail prefix' }),
            React.createElement('input', { id: 'email', type: 'email', className: 'validate' }),
            React.createElement(
              'label',
              { 'for': 'email' },
              'E-mail'
            )
          ),
          React.createElement(
            'div',
            { className: 'input-field col s12' },
            React.createElement('i', { className: 'mdi-action-lock-outline prefix' }),
            React.createElement('input', { id: 'password', type: 'password', className: 'validate' }),
            React.createElement(
              'label',
              { 'for': 'password' },
              'Password'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'modal-footer' },
          React.createElement(
            'a',
            { href: '#!', className: 'modal-action modal-close indigo waves-effect waves-indigo btn-flat white-text' },
            'Login'
          )
        )
      );
    }
  }]);

  return LoginPopup;
})(React.Component);
