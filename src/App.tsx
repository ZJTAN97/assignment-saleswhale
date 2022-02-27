import { Teams } from "./components/Teams";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Teams} />
      </Switch>
    </Router>
  );
};
