// @flow
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Form from "./../Form";
import TextInput from "./../Form/TextInput";
import CheckBox from "./../Form/CheckBox";
import Button from "./../Form/Button";

type Props = {};
type State = {
  firstName: string,
  lastName: string,
  email: string,
  terms: boolean,
  isLoading: boolean
};
class VoucherForm extends Component<Props, State> {
  handleSubmit: Function;

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      terms: false,
      isLoading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //submit form and check API
  handleSubmit(model) {
    this.setState({ isLoading: true });
    this.setState(model);

    console.log("submit is done");
    return;
  }

  render() {
    return (
      <section>
        <Form handleSubmit={this.handleSubmit}>
          <TextInput
            label="First name"
            placeholder="Enter first name"
            name="firstName"
            validation={{
              required: true,
              minLength: 2,
              isAlphaOnly: true
            }}
          />
          <TextInput
            label="Surname"
            placeholder="Enter surname"
            name="lastName"
            validation={{
              required: true
            }}
          />
          <TextInput
            label="Email address"
            placeholder="Enter your e-mail address"
            name="email"
            validation={{
              required: true,
              isEmail: true
            }}
          />

          <CheckBox
            name="terms"
            validation={{
              required: true
            }}
            validationMessage="You need to accept privacy settlement"
          >
            Accept <a href="#">privacy settlement</a>
          </CheckBox>
          <div className="buttonbar">
            <Button label="Get offer" isLoading={this.state.isLoading} />
          </div>
        </Form>
      </section>
    );
  }
}

export default withRouter(VoucherForm);
