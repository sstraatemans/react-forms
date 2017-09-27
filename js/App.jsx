// @flow
import React, { Component } from "react";
import FormField from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <FormField type="TextInput" {...this.props} color="red" />;
  }
}

export default App;
