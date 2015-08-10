import React from "react";

export default class Loader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  style() {
    return {
      overlay: {
        display: "block",
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,0.5)"
      },
      hidden: {
        display: "none"
      },
      spinner: {
        position: "fixed",
        left: "50%",
        top: "50%",
        width: "40px",
        height: "40px",
        marginLeft: "-20px",
        marginTop: "-20px"
      }
    };
  }

  render() {
    var loaderStyle;

    if(this.props.isLoading) {
      loaderStyle = this.style().overlay;
    } else {
      loaderStyle = this.style().hidden;
    }

    return (
      <div ref="overlay" style={ loaderStyle }>
        <img src="/images/loader.gif" style={ this.style().spinner } />
      </div>
    )
  }
}
