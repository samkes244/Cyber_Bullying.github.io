import "./App.css";
import Controller from "./components/Controller";
import Header from "./components/Header";
import Save from "./components/Save";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveYourself from "./components/SaveYourself";
import Complaint from "./components/Complaint";
import Form from "./components/Form";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/form">
            <Header />
            <Form />
            <Controller />
          </Route>
          <Route path="/complaint-info">
            <Header />
            <Complaint />
            <Controller />
          </Route>
          <Route path="/save">
            <Header />
            <SaveYourself />
            <Controller />
          </Route>
          <Route path="/">
            <Header />
            <Save />
            <Controller />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
