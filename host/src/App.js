import React, { Suspense } from "libs/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "libs/react-router-dom";

const Page2 = React.lazy(() => import("remote1/Page2"));
const Button = React.lazy(() => import("remote1/Button"));
const Input = React.lazy(() => import("remote2/Input"));

const App = () => {
  return (
    <Router>
      <div>
        <div
          style={{
            margin: "10px",
            padding: "10px",
            textAlign: "center",
            backgroundColor: "greenyellow",
          }}
        >
          <h1>HOST</h1>
          HOST ONLY SUPPORTS LIVE RELOAD. GO TO http://localhost:3001 to try out
          HMR
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/page2">Page2</Link>
            </li>
            <li>
              <Link to="/input">Input:3003</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={"loading..."}>
          <Switch>
            <Route path="/button">
              <Button />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
            <Route path="/input">
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
