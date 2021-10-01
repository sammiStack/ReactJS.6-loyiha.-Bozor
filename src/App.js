import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Notes from "./pages/Notes";
import Note from "./pages/Note";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact component={Notes} />
            <Route path="/note/:id" component={Note} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
