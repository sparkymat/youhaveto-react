"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginContainer = (function (_React$Component) {
  _inherits(LoginContainer, _React$Component);

  function LoginContainer(props) {
    _classCallCheck(this, LoginContainer);

    _get(Object.getPrototypeOf(LoginContainer.prototype), "constructor", this).call(this, props);

    this.state = {
      email: null,
      password: null,
      name: null,
      mode: "login"
    };
  }

  _createClass(LoginContainer, [{
    key: "switchToMode",
    value: function switchToMode(mode) {
      this.setState({
        mode: mode
      });
    }
  }, {
    key: "loginClicked",
    value: function loginClicked() {
      var email = React.findDOMNode(this.refs.loginEmail).value;
      var password = React.findDOMNode(this.refs.loginPassword).value;

      if (email && password) {} else {
        swal("Error", "You have to enter an e-mail and  password to login");
      }
    }
  }, {
    key: "registerClicked",
    value: function registerClicked() {}
  }, {
    key: "passwordClicked",
    value: function passwordClicked() {}
  }, {
    key: "render",
    value: function render() {
      var loginButton = React.createElement(
        "a",
        { href: "javascript:void(0)", className: "btn btn-default", style: { width: "100%" }, onClick: this.switchToMode.bind(this, "login") },
        "Login"
      );
      var registerButton = React.createElement(
        "a",
        { href: "javascript:void(0)", className: "btn btn-default", style: { width: "100%" }, onClick: this.switchToMode.bind(this, "register") },
        "Register"
      );
      var passwordButton = React.createElement(
        "a",
        { href: "javascript:void(0)", className: "btn btn-default", style: { width: "100%" }, onClick: this.switchToMode.bind(this, "password") },
        "Reset password"
      );

      switch (this.state.mode) {
        case "login":
          loginButton = React.createElement(
            "a",
            { href: "javascript:void(0)", className: "btn btn-primary", style: { width: "100%" }, onClick: this.loginClicked.bind(this) },
            "Login"
          );
          break;
        case "register":
          registerButton = React.createElement(
            "a",
            { href: "javascript:void(0)", className: "btn btn-primary", style: { width: "100%" }, onClick: this.registerClicked.bind(this) },
            "Register"
          );
          break;
        case "password":
          passwordButton = React.createElement(
            "a",
            { href: "javascript:void(0)", className: "btn btn-primary", style: { width: "100%" }, onClick: this.passwordClicked.bind(this) },
            "Reset password"
          );
          break;
      }

      return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3" },
          React.createElement(
            "div",
            { className: "panel panel-default", style: { marginTop: 30 } },
            React.createElement(
              "div",
              { className: "panel-body" },
              React.createElement(
                "h3",
                null,
                "Login"
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { "for": "login_email" },
                  "E-mail"
                ),
                React.createElement("input", { id: "login_email", ref: "loginEmail", type: "email", className: "form-control" })
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { "for": "login_password" },
                  "Password"
                ),
                React.createElement("input", { id: "login_password", ref: "loginPassword", type: "password", className: "form-control" })
              ),
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "div",
                  { className: "col-xs-4 col-sm-4 col-md-4 col-lg-4" },
                  passwordButton
                ),
                React.createElement(
                  "div",
                  { className: "col-xs-4 col-sm-4 col-md-4 col-lg-4" },
                  registerButton
                ),
                React.createElement(
                  "div",
                  { className: "col-xs-4 col-sm-4 col-md-4 col-lg-4" },
                  loginButton
                )
              )
            )
          )
        )
      );
    }
  }]);

  return LoginContainer;
})(React.Component);
