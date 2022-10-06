/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import Connexion from "@pages/Connexion";
import Home from "@pages/Home";
import SignUp from "@pages/SignUp";
import Movies from "@pages/Movies";
import Teams from "@pages/Teams";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "@pages/Users";
import AuthAPI from "@services/AuthAPI";
import Profile from "@pages/Profile";
import UnauthorizedPage from "@pages/UnauthorizedPage";
import Contact from "@components/Contact";

import { useState } from "react";

// import PrivateRoute from "@components/PrivateRoute";
import AdminRoute from "@components/AdminRoute";

import Header from "@components/Header";
import Footer from "@components/Footer";
import AuthContext from "./contexts/AuthContext";
import CurrentUserContext from "./contexts/CurrentUserContext";
import "./App.css";

AuthAPI.setup();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthAPI.isAuthenticated
  );
  const [currentUser, setCurrentUser] = useState(AuthAPI.isCurrentUser);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Router>
          <div className="containerHome">
            <div className="header-home">
              <Header />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/" element={<Connexion />} />
              <Route path="/signup/" element={<SignUp />} />
              <Route path="/teams/" element={<Teams />} />
              <Route path="/movies/" element={<Movies />} />
              <Route path="/contact" element={<Contact />} />
              {/* // <PrivateRoute>
                <Movies />
                // </PrivateRoute>
              }/> */}
              <Route
                path="/users/"
                element={
                  <AdminRoute>
                    <Users />
                  </AdminRoute>
                }
              />
              <Route path="/my-profile/" element={<Profile />} />
              <Route path="/unauthorized/" element={<UnauthorizedPage />} />
            </Routes>
            <div className="footer-home">
              <Footer />
            </div>
          </div>
        </Router>
      </CurrentUserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
