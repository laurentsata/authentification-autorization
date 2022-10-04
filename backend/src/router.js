/* eslint-disable import/extensions */
const express = require("express");

const router = express.Router();

const { hashPassword, verifyPassword, verifyToken } = require("./auth.js");
const productControllers = require("./controllers/productControllers");

const userControllers = require("./controllers/userControllers");
const movieControllers = require("./controllers/movieControllers");

router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.read);
// router.get("/categories/:id", categoryControllers.read);
router.get("/productsdetails", productControllers.readProductsDetails);

router.post("/api/users", hashPassword, userControllers.postUser);

router.post(
  "/api/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/api/movies", movieControllers.getAll);

// ROUTES PROTEGEES
router.use(verifyToken);

router.get("/api/users", userControllers.getUsers);
router.get("/api/users/:id", userControllers.getUserById);

module.exports = router;
