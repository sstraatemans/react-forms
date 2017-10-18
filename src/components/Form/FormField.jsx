// @flow
import * as React from "react";
import Validator from "./../../services/Validator";

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
  value: string
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
        value: ""
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
        return <label htmlFor={this.props.name}>{this.props.label}</label>;
      }
    }

    changeHandler(e: SyntheticEvent<any>) {
      let val = e.currentTarget.value;
      if (e.target.type === "checkbox") {
        val = e.currentTarget.checked;
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
        return (
          <div className="formfield-error">{this.props.validationMessage}</div>
        );
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

  return Wrapper;
};

export default FormField;
