class LoginPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined
    };

    window.yht.subscribe("loginRequested", this);
  }

  onLoginRequested() {
    $('.login-popup').openModal();
  }

  loginClicked() {
    var email = React.findDOMNode(this.refs.email).value; 
    var password = React.findDOMNode(this.refs.password).value;

    console.log("email="+email+" password="+password);
  }

  render() {
    return (
      <div className='login-popup modal'>
        <div className='modal-content row'>
          <h4 className='s12 m12 l12 center-align'>Login</h4>
          <div className='input-field col s12'>
            <i className='mdi-content-mail prefix'></i>
            <input ref='email' id='email' type='email' className='validate'></input>
            <label for='email'>E-mail</label>
          </div>
          <div className='input-field col s12'>
            <i className='mdi-action-lock-outline prefix'></i>
            <input ref='password' id='password' type='password' className='validate'></input>
            <label for='password'>Password</label>
          </div>
        </div>
        <div className='modal-footer'>
          <a href='#!' className='modal-action indigo waves-effect waves-indigo btn-flat white-text' onClick={this.loginClicked.bind(this)}>Login</a>
        </div>
      </div>
    )
  }
}
