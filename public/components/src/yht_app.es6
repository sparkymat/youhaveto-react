class YhtApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class='yht-app row'>
        <MainContainer className='col s12 m12 l12'></MainContainer>
        <LoginPopup></LoginPopup>
      </div>
    )
  }
}
