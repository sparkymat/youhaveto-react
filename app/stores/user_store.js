import YHT from "../utils/yht";

export default class UserStore {
  constructor() {
    YHT.subscribe("user.login", self, "onUserLogin")
  }
  
  onUserLogin(params) {
    console.log("onUserLogin: "+params)
  }
}
