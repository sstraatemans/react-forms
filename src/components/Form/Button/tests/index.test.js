import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "./../";

describe("<Button />", () => {
  it("render component <Button>", () => {
    const wrapper = mount(<Button />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("sets loading param", () => {
    let props = {
      isLoading: true
    };
    const renderedComponent = shallow(<Button {...props} />);
    expect(renderedComponent.prop("isLoading")).toEqual("true");
  });

  it("do not set loading param", () => {
    let props = {};
    const renderedComponent = shallow(<Button {...props} />);

    expect(renderedComponent.prop("isLoading")).toEqual("");
  });
});
