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
        <div className='fire row'>
          <MainContainer className='col s12 m12 l12'> 
          </MainContainer>
        </div>
      )
    } else {
      return (
        <div className='fire row'>
          <LoginContainer>
          </LoginContainer>
        </div>
      )
    }
  }
}
