import React from "react";
import ReactDOM from "react-dom";
import Form from "./";

describe("Form", () => {
  it("renders without crashing", () => {
    let props = {
      onSubmit: () => {}
    };

    const div = document.createElement("div");
    ReactDOM.render(<Form {...props} />, div);
  });
});
