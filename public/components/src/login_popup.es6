class LoginPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='login-popup modal'>
        <div className='modal-content'>
          <h4>Modal header</h4>
          <p>This was a triumph!</p>
        </div>
        <div className='modal-footer'>
          <a href='#!' className='modal-action modal-close waves-effect waves-green btn-flat'>Agree</a>
        </div>
      </div>
    )
  }
}
