class YhtApp extends React.Component {
  constructor(props) {
    super(props);

    this.store = new YhtStore();
    this.state = this.dataFromStore();

    window.yht.subscribe("appStateChanged", this);
  }

  dataFromStore() {
    return {
      loginMode: this.store.loginMode
    };
  }

  onAppStateChanged() {
    this.setState(this.dataFromStore());
  }

  render() {
    return (
      <div className='yht-app row'>
        <MainContainer className='col s12 m12 l12' 
          loginMode={this.state.loginMode}>
        </MainContainer>
      </div>
    )
  }
}
