//@flow
import * as React from "react";
import TextInput from "./TextInput";

type Props = {
  type: string,
  name: string
};
class FormField extends React.Component<Props> {
  components = {
    text: TextInput
  };
  render() {
    const TagName = this.components[this.props.type];
    return (
      <div className="formfield">
        <TagName {...this.props} />
      </div>
    );
  }
}

export default FormField;
