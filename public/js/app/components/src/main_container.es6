class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  loginClicked() {
    window.yht.broadcast("loginRequested");
  }

  render() {
    return (
      <div className='main-container'>
        <nav>
          <div className='nav-wrapper indigo white-text'>
            <a href='#' className='brand-logo'>YouHaveTo</a>
            <ul id='main-menu' className='right hide-on-med-and-down'>
              <li><a href='#!' onClick={this.loginClicked.bind(this)}>Login</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
