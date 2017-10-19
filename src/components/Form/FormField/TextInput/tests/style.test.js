import React from "react";
import { shallow } from "enzyme";
import { Input } from "./../style";

describe("<Input />", () => {
  it("should render an <input> tag", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.type()).toEqual("input");
  });
});
