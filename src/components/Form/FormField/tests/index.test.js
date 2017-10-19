import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import FormField from "./../";

configure({ adapter: new Adapter() });
let props;

xdescribe("FormField", () => {
  beforeAll(() => {
    props = {
      name: "firstname",
      label: "firstname",
      type: "text"
    };
  });

  xit("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FormField {...props} />, div);
  });

  xit("renders the label name", () => {
    //const field = shallow(<FormField {...props} />);
    const div = document.createElement("div");
    ReactDOM.render(<FormField {...props} />, div);
    const label = div.querySelector("label");
    const text = label.innerHTML;
    expect(text).toBe(props.label);
  });
});
