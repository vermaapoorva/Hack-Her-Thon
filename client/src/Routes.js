// import React, { Component } from "react";
// import { Router, Switch, Route } from "react-router-dom";

import Signin from "./pages/Signin/Signin";
import Products from "./pages/Products/Products";

// export default class Routes extends Component {
//     render() {
//         return (
//             <Router>
//                 <Switch>
//                     <Route path="/" component={Signin} />
//                     <Route path="/Products" component={Products} />
//                 </Switch>
//             </Router>
//         )
//     }
// }

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
