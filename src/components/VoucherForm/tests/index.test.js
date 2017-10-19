import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import VoucherForm from "./../";

describe("<VoucherForm />", () => {
  it("render component <VoucherForm>", () => {
    const wrapper = mount(<VoucherForm />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
