class YhtStore {
  constructor() {
    this.loginMode = "normal";

    window.yht.subscribe("loginRequested", this);
    window.yht.subscribe("loginCancelled", this);
    window.yht.subscribe("loginAttempted", this);
  }

  onLoginAttempted() {
    this.loginMode = "normal";
    window.yht.broadcast("appStateChanged");
  }

  onLoginCancelled() {
    this.loginMode = "normal";
    window.yht.broadcast("appStateChanged");
  }

  onLoginRequested() {
    this.loginMode = "form";
    window.yht.broadcast("appStateChanged");
  }
}
