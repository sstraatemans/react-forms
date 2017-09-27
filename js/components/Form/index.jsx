import React, { Component } from "react";
import TextInput from "./TextInput";

class FormField extends Component {
  constructor(props) {
    super(props);
  }
  components = {
    TextInput
  };
  render() {
    const TagName = this.components[this.props.type];
    return <TagName {...this.props} />;
  }
}

export default FormField;
