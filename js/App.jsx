// @flow
import * as React from "react";
import FormField from "./components/FormField";

type Props = {};
class App extends React.Component<Props> {
  render() {
    return (
      <div>
        <FormField placeholder="fill in value" type="text" name="test" />
      </div>
    );
  }
}

export default App;
