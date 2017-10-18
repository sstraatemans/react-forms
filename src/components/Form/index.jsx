import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Form.css";
import Validator from "./../../services/Validator";

class Form extends Component {
  constructor(props) {
    super(props);
    this.inputs = [];
    this.Validator = new Validator();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.attachFormField = this.attachFormField.bind(this);
    this.detachFormField = this.detachFormField.bind(this);
    this.getModel = this.getModel.bind(this);
  }

  attachFormField(field) {
    this.inputs.push(field);
  }

  detachFormField(field) {
    delete this.inputs[field.props.name];
  }

  getModel() {
    let model = {};
    Object.keys(this.inputs).forEach(key => {
      let m = this.inputs[key];
      model[m.props.name] = m.state.value;
    });
    return model;
  }

  handleSubmit(e) {
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

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
