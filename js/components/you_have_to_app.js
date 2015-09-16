import React from "react";
import LoginContainer from "./login_container";
import MainContainer from "./main_container";

export default class YouHaveToApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  render() {
    if(this.state.currentUser) {
      return (
        <MainContainer> 
        </MainContainer>
      )
    } else {
      return (
        <LoginContainer>
        </LoginContainer>
      )
    }
  }
}
