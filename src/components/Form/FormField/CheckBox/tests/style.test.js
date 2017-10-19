import React from "react";
import { shallow } from "enzyme";
import { CheckBoxWrapper, CheckBox, CheckBoxBox, Label } from "./../style";

describe("<CheckBoxWrapper />", () => {
  it("should render an <div> tag", () => {
    const wrapper = shallow(<CheckBoxWrapper />);
    expect(wrapper.type()).toEqual("div");
  });
});

describe("<CheckBox />", () => {
  it("should render an <input> tag", () => {
    const wrapper = shallow(<CheckBox />);
    expect(wrapper.type()).toEqual("input");
  });
});

describe("<CheckBoxBox />", () => {
  it("should render an <span> tag", () => {
    const wrapper = shallow(<CheckBoxBox />);
    expect(wrapper.type()).toEqual("span");
  });
});

describe("<Label />", () => {
  it("should render an <label> tag", () => {
    const wrapper = shallow(<Label />);
    expect(wrapper.type()).toEqual("label");
  });
});
