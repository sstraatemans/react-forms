import React, { Component } from "react";

class TextInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <input type="text" {...this.props} />;
  }
}

export default TextInput;
