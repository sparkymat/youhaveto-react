import React from "react";
import mui from "material-ui";
import Loader from "./loader";

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
      loading: false
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
    this.setState({
      loading: true
    });
  }

  render() {
    let actions = [
      { text: 'Login', onClick: this.loginClicked.bind(this),  ref: 'submit' }
    ];

    return (
      <div style={{position: "absolute", left: 0, top: 0, right: 0, bottom: 0}}>
        <Loader isLoading={this.state.loading} />
        <Dialog
          ref="logindialog"
          title="Login"
          actions={actions}
          actionFocus="submit"
          modal={true} >
          <TextField value={this.state.email} onChange={this.handleValueChange.bind(this,"email")} hintText="e.g. adam@example.com" floatingLabelText="E-mail" style={{width: "100%"}} />
          <TextField value={this.state.password} onChange={this.handleValueChange.bind(this,"password")} floatingLabelText="Password" type="password" style={{width: "100%"}} />
        </Dialog>
      </div>
    )
  }
}

LoginContainer.childContextTypes = {
  muiTheme: React.PropTypes .object
};
