"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserStore = (function () {
  function UserStore() {
    _classCallCheck(this, UserStore);

    YHT.subscribe("user.login", self, "onUserLogin");
  }

  _createClass(UserStore, [{
    key: "onUserLogin",
    value: function onUserLogin(params) {
      console.log("onUserLogin: " + params);
    }
  }]);

  return UserStore;
})();

YHT.stores.push(new UserStore());
