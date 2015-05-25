'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var YouHaveToApp = (function (_React$Component) {
  function YouHaveToApp(props) {
    _classCallCheck(this, YouHaveToApp);

    _get(Object.getPrototypeOf(YouHaveToApp.prototype), 'constructor', this).call(this, props);

    this.store = new FireStore();
    this.state = this.dataFromStore();

    Fire.subscribe('appStateChanged', this);
  }

  _inherits(YouHaveToApp, _React$Component);

  _createClass(YouHaveToApp, [{
    key: 'dataFromStore',
    value: function dataFromStore() {
      return {
        loginMode: this.store.loginMode
      };
    }
  }, {
    key: 'onAppStateChanged',
    value: function onAppStateChanged() {
      this.setState(this.dataFromStore());
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'fire row' },
        React.createElement(MainContainer, { className: 'col s12 m12 l12',
          loginMode: this.state.loginMode })
      );
    }
  }]);

  return YouHaveToApp;
})(React.Component);