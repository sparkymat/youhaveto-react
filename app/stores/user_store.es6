class UserStore {
  constructor() {
    YHT.subscribe("user.login", self, "onUserLogin")
  }
  
  onUserLogin(params) {
    console.log("onUserLogin: "+params)
  }
}

YHT.stores.push(new UserStore())
