import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "./../";

describe("<Button />", () => {
  it("render component <Button>", () => {
    const wrapper = mount(<Button />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
