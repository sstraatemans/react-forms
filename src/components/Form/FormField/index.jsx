// @flow
import * as React from "react";
import Validator from "./../../../services/Validator";
import { InputFieldWrapper, FormFieldError, Label } from "./style";

type Props = {
  name: string,
  label?: string,
  placeholder?: string,
  validation?: Object,
  validationRules?: Object,
  validationMessage?: string,
  attachFormField?: (field: any) => void, //this should be fixed!!! is required
  detachFormField?: (field: any) => void
};

type State = {
  isValidationError: boolean,
  val: boolean
};

const FormField = (InputFieldComponent: React.ComponentType<any>) => {
  class Wrapper extends React.Component<Props, State> {
    Validator: Function;
    validationHandler: Function;
    validationMessage: string;
    changeHandler: Function;
    restProps: Object;

    static defaultProps = {
      validationMessage: "There is a problem with this field"
    };

    constructor(props: Props) {
      super(props);

      this.state = {
        isValidationError: false,
        val: false
      };

      this.Validator = new Validator();
      this.validationHandler = this.validationHandler.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
    }

    componentWillMount() {
      if (this.props.attachFormField) {
        this.props.attachFormField(this);
      }
    }
    componentWillUnMount() {
      if (this.props.detachFormField) {
        this.props.detachFormField(this);
      }
    }

    renderLabel() {
      if (this.props.label) {
        return (
          <Label
            validationError={this.state.isValidationError ? "true" : ""}
            htmlFor={this.props.name}
          >
            {this.props.label}
          </Label>
        );
      }
    }

    changeHandler(e: SyntheticEvent<any>) {
      let value = e.currentTarget.value;
      if (e.target.type === "checkbox") {
        value = e.currentTarget.checked;
      }
      this.setState({ val: value });
    }

    validationHandler() {
      if (!this.props.validation) {
        return;
      }

      if (!this.Validator.validate(this.state.val, this.props.validation)) {
        this.setState({ isValidationError: true });
        return;
      }
      this.setState({ isValidationError: false });
    }

    showValidationError() {
      if (this.state.isValidationError) {
        return <FormFieldError>{this.props.validationMessage}</FormFieldError>;
      }
    }

    render() {
      let {
        validation,
        validationMessage,
        attachFormField,
        detachFormField,
        ...rest
      } = this.props;
      this.restProps = rest;

      return (
        <InputFieldWrapper>
          {this.renderLabel()}
          <InputFieldComponent
            validationError={this.state.isValidationError ? "true" : ""}
            id={this.props.name}
            {...this.restProps}
            onChange={this.changeHandler}
            onBlur={this.validationHandler}
            val={this.state.val}
          />
          {this.showValidationError()}
        </InputFieldWrapper>
      );
    }
  }

  return Wrapper;
};

export default FormField;
