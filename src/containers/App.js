import React, { Component } from "react";
import "./App.css";
import Form from "../components/Form";

import { Provider } from "react-redux";
import store from "../redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" component={Form} />
            </Switch>
          </Router>
        </Provider>
    );
  }
}

export default App;
