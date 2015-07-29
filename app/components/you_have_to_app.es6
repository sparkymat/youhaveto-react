class YouHaveToApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  render() {
    if(this.state.currentUser) {
      return (
        <div>
          <MainContainer> 
          </MainContainer>
        </div>
      )
    } else {
      return (
        <div className='container-fluid'>
          <LoginContainer>
          </LoginContainer>
        </div>
      )
    }
  }
}
