import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/signup">
            {!user && <Signup />}
            {user && <Redirect to="/" />}
          </Route>
          <Route path="/login">
            {!user && <Login />}
            {user && <Home />}
          </Route>
          <Route exact path="/">
            {!user && <Redirect to="/login" />}
            {user && <Home />}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
