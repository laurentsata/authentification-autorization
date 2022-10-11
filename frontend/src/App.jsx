/* eslint-disable import/no-unresolved */
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
import AdminProductsPage from "@pages/AdminProductsPage";
import AdminCategoriesPage from "@pages/AdminCategoriesPage";
import AdminProductPage from "@pages/AdminProductPage";
import AdminCreateProductPage from "@pages/AdminCreateProductPage";
import AdminCreateCategoryPage from "@pages/AdminCreateCategoryPage";
import AdminCategoryPage from "@pages/AdminCategoryPage";
import Admin from "@pages/Admin";
import Categories from "@components/Categories";
import Category from "@components/Category";

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
              <Admin />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/" element={<Connexion />} />
              <Route path="/signup/" element={<SignUp />} />
              <Route path="/teams/" element={<Teams />} />
              <Route path="/movies/" element={<Movies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/category" element={<Category />} />
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
              <Route
                path="/admin/"
                element={
                  <AdminRoute>
                    <Admin />
                  </AdminRoute>
                }
              />
              <Route path="/admin/products" element={<AdminProductsPage />} />
              <Route
                path="/admin/products/:id"
                element={<AdminProductPage />}
              />
              <Route
                path="/admin/products/create"
                element={<AdminCreateProductPage />}
              />
              <Route
                path="/admin/categories"
                element={<AdminCategoriesPage />}
              />
              <Route
                path="/admin/categories/:id"
                element={<AdminCategoryPage />}
              />
              <Route
                path="/admin/categories/create"
                element={<AdminCreateCategoryPage />}
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
