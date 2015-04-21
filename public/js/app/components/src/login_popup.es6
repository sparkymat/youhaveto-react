class LoginPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    window.yht.subscribe("loginClicked", this);
  }

  onLoginClicked() {
    $('.login-popup').openModal();
  }

  render() {
    return (
      <div className='login-popup modal'>
        <div className='modal-content row'>
          <h4 className='s12 m12 l12 center-align'>Login</h4>
          <div className='input-field col s12'>
            <i className='mdi-content-mail prefix'></i>
            <input id='email' type='email' className='validate'></input>
            <label for='email'>E-mail</label>
          </div>
          <div className='input-field col s12'>
            <i className='mdi-action-lock-outline prefix'></i>
            <input id='password' type='password' className='validate'></input>
            <label for='password'>Password</label>
          </div>
        </div>
        <div className='modal-footer'>
          <a href='#!' className='modal-action modal-close indigo waves-effect waves-indigo btn-flat white-text'>Login</a>
        </div>
      </div>
    )
  }
}
