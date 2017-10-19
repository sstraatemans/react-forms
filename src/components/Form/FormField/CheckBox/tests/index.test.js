import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { UnWrapped } from "./../";

describe("<StyledCheckBox />", () => {
  it("render component <UnWrapped>", () => {
    let props = {
      name: "terms",
      val: true,
      onChange: () => {}
    };
    const wrapper = mount(<UnWrapped {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("sets checked", () => {
    let props = {
      id: "terms",
      val: true,
      onChange: () => {}
    };
    const renderedComponent = mount(<UnWrapped {...props} />);
    expect(renderedComponent.find("input").prop("checked")).toEqual("checked");
  });
});
