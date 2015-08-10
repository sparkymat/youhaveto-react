import React from "react";
import mui from "material-ui";
import swal from "sweetalert.swal";

let Dialog = mui.Dialog;
let TextField = mui.TextField;
let ThemeManager = new mui.Styles.ThemeManager();

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      name: null,
      mode: "login"
    };
  }

  componentDidMount() {
    this.refs.logindialog.show();
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  handleValueChange(field, event) {
    var newState = {};
    newState[field] = event.target.value;

    this.setState(newState);
  }

  loginClicked(event) {
    swal("Error", "No backend found", "error");
  }

  render() {
    let actions = [
      { text: 'Login', onTouchTap: this.loginClicked.bind(this),  ref: 'submit' }
    ];

    return (
      <Dialog
        ref="logindialog"
        title="Login"
        actions={actions}
        actionFocus="submit"
        modal={true} >
        <TextField value={this.state.email} onChange={this.handleValueChange.bind(this,"email")} hintText="e.g. adam@example.com" floatingLabelText="E-mail" style={{width: "100%"}} />
        <TextField value={this.state.password} onChange={this.handleValueChange.bind(this,"password")} floatingLabelText="Password" type="password" style={{width: "100%"}} />
      </Dialog>
    )
  }
}

LoginContainer.childContextTypes = {
  muiTheme: React.PropTypes .object
};
