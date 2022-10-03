/* eslint-disable react/jsx-no-constructed-context-values */
import Connexion from "@pages/Connexion";
import Home from "@pages/Home";
import SignUp from "@pages/SignUp";
import Movies from "@pages/Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "@pages/Users";
import AuthAPI from "@services/AuthAPI";
import Profile from "@pages/Profile";
import UnauthorizedPage from "@pages/UnauthorizedPage";
import { useState } from "react";
import PrivateRoute from "@components/PrivateRoute";
import Header from "@components/Header";
import AuthContext from "./contexts/AuthContext";

AuthAPI.setup();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthAPI.isAuthenticated
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <div className="containerHome">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/" element={<Connexion />} />
            <Route path="/signup/" element={<SignUp />} />

            <Route
              path="/movies/"
              element={
                <PrivateRoute>
                  <Movies />
                </PrivateRoute>
              }
            />

            <Route path="/users/" element={<Users />} />
            <Route path="/my-profile/" element={<Profile />} />
            <Route path="/unauthorized/" element={<UnauthorizedPage />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
