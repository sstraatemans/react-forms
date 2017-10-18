// @flow
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Four0Four from "./scenes/Four0Four";
import Voucher from "./scenes/Voucher";
import FormSubmit from "./scenes/FormSubmit";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Voucher} />
        <Route
          exact
          path="/success"
          render={props => <FormSubmit {...props} success="true" />}
        />
        <Route exact path="/fail" render={props => <FormSubmit {...props} />} />
        <Route component={Four0Four} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
