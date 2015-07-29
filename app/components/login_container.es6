class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      name: null,
      mode: "login"
    };
  }

  switchToMode(mode) {
    this.setState({
      mode: mode
    });
  }

  loginClicked() {
    var email = React.findDOMNode(this.refs.loginEmail).value;
    var password = React.findDOMNode(this.refs.loginPassword).value;

    if(email && password) {
    } else {
      swal("Error", "You have to enter an e-mail and  password to login");
    }
  }

  registerClicked() {
  }

  passwordClicked() {
  }

  render() {
    var loginButton =  (
      <a href="javascript:void(0)" className="btn btn-default" style={{width: "100%"}} onClick={this.switchToMode.bind(this, "login")}>Login</a>
    );
    var registerButton =  (
      <a href="javascript:void(0)" className="btn btn-default" style={{width: "100%"}} onClick={this.switchToMode.bind(this, "register")}>Register</a>
    );
    var passwordButton =  (
      <a href="javascript:void(0)" className="btn btn-default" style={{width: "100%"}} onClick={this.switchToMode.bind(this, "password")}>Reset password</a>
    );

    switch(this.state.mode) {
      case "login":
        loginButton = (
          <a href="javascript:void(0)" className="btn btn-primary" style={{width: "100%"}} onClick={this.loginClicked.bind(this)}>Login</a>
        )
        break;
      case "register":
        registerButton = (
          <a href="javascript:void(0)" className="btn btn-primary" style={{width: "100%"}} onClick={this.registerClicked.bind(this)}>Register</a>
        )
        break;
      case "password":
        passwordButton = (
          <a href="javascript:void(0)" className="btn btn-primary" style={{width: "100%"}} onClick={this.passwordClicked.bind(this)}>Reset password</a>
        )
        break;
    }

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3">
          <div className="panel panel-default" style={{marginTop: 30}}>
            <div className="panel-body">
              <h3>Login</h3>
              <div className="form-group">
                <label for="login_email">E-mail</label>
                <input id="login_email" ref="loginEmail" type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label for="login_password">Password</label>
                <input id="login_password" ref="loginPassword" type="password" className="form-control" />
              </div>
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  { passwordButton }
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  { registerButton }
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  { loginButton }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
