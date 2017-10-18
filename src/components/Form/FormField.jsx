import React, { Component } from "react";
import PropTypes from "prop-types";
import Validator from "./../../services/Validator";

const FormField = InputFieldComponent => {
  class Wrapper extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isValidationError: false,
        value: ""
      };

      this.Validator = new Validator();
      this.validationHandler = this.validationHandler.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
    }

    componentWillMount() {
      this.props.attachFormField(this);
    }
    componentWillUnMount() {
      this.props.detachFormField(this);
    }

    renderLabel() {
      if (this.props.label) {
        return <label htmlFor={this.props.name}>{this.props.label}</label>;
      }
    }

    changeHandler(e) {
      let val = e.target.value;
      if (e.target.type === "checkbox") {
        val = e.target.checked;
      }
      this.setState({ value: val });
    }

    validationHandler() {
      if (!this.props.validation) {
        return;
      }

      if (!this.Validator.validate(this.state.value, this.props.validation)) {
        this.setState({ isValidationError: true });
        return;
      }
      this.setState({ isValidationError: false });
    }

    showValidationError() {
      if (this.state.isValidationError) {
        return <div className="formfield-error">{this.validationMessage}</div>;
      }
    }

    render() {
      const {
        validation,
        validationMessage,
        attachFormField,
        detachFormField,
        ...rest
      } = this.props;
      this.validationRules = validation;
      this.validationMessage = validationMessage;
      this.restProps = rest;

      return (
        <div
          className={`formfield ${InputFieldComponent.name.toLowerCase()} ${this
            .state.isValidationError
            ? "error"
            : ""}`}
        >
          <InputFieldComponent
            id={this.props.name}
            {...this.restProps}
            onChange={this.changeHandler}
            onBlur={this.validationHandler}
            value={this.state.value}
          />
          {this.showValidationError()}
        </div>
      );
    }
  }

  Wrapper.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validation: PropTypes.object,
    validationMessage: PropTypes.string,
    attachFormField: PropTypes.func,
    detachFormField: PropTypes.func
  };

  // Specifies the default values for props:
  Wrapper.defaultProps = {
    validationMessage: "There is a problem with this field"
  };

  return Wrapper;
};

export default FormField;
