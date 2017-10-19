import React from "react";
import ReactDOM from "react-dom";
import TextInput from "./../";

describe("Form TextInput", () => {
  xit("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TextInput />, div);
  });
});
