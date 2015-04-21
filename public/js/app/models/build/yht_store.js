"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var YhtStore = (function () {
  function YhtStore() {
    _classCallCheck(this, YhtStore);

    this.loginMode = "normal";

    window.yht.subscribe("loginRequested", this);
    window.yht.subscribe("loginCancelled", this);
    window.yht.subscribe("loginAttempted", this);
  }

  _createClass(YhtStore, [{
    key: "onLoginAttempted",
    value: function onLoginAttempted() {
      this.loginMode = "normal";
      window.yht.broadcast("appStateChanged");
    }
  }, {
    key: "onLoginCancelled",
    value: function onLoginCancelled() {
      this.loginMode = "normal";
      window.yht.broadcast("appStateChanged");
    }
  }, {
    key: "onLoginRequested",
    value: function onLoginRequested() {
      this.loginMode = "form";
      window.yht.broadcast("appStateChanged");
    }
  }]);

  return YhtStore;
})();
