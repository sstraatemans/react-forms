// @flow
import * as React from "react";

import Validator from "./../../services/Validator";

type Props = {
  handleSubmit: Function,
  children: Array<any>
};

class Form extends React.Component<Props> {
  inputs: Array<any>;
  Validator: Function;
  handleSubmit: Function;
  attachFormField: Function;
  detachFormField: Function;
  getModel: Function;

  constructor(props: Props) {
    super(props);
    this.inputs = [];
    this.Validator = new Validator();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.attachFormField = this.attachFormField.bind(this);
    this.detachFormField = this.detachFormField.bind(this);
    this.getModel = this.getModel.bind(this);
  }

  attachFormField(field: React.Element<any>) {
    this.inputs.push(field);
  }

  detachFormField(field: React.Element<any>) {
    delete this.inputs[field.props.name];
  }

  getModel() {
    let model = {};
    this.inputs.forEach(key => {
      let m = this.inputs[key];
      model[m.props.name] = m.state.value;
    });
    return model;
  }

  handleSubmit(e: SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!this.Validator.validateForm(this.inputs)) {
      return;
    }
    let model = this.getModel();
    this.props.handleSubmit(model);
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => {
      if (typeof child.type === "function") {
        return React.cloneElement(child, {
          attachFormField: this.attachFormField,
          detachFormField: this.detachFormField
        });
      } else {
        return child;
      }
    });
    return <form onSubmit={this.handleSubmit}>{childrenWithProps}</form>;
  }
}

export default Form;
