import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/feed">
            <Header />
            <Feed />
          </Route>
          <Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
