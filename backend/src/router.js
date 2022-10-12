/* eslint-disable import/extensions */
const express = require("express");

const router = express.Router();

const { hashPassword, verifyPassword, verifyToken } = require("./auth.js");

const productControllers = require("./controllers/productControllers");
const userControllers = require("./controllers/userControllers");
const categoryControllers = require("./controllers/categoryControllers");
const productCategoryControllers = require("./controllers/productCategoryControllers");
// const movieControllers = require("./controllers/movieControllers");
const teamControllers = require("./controllers/teamControllers");
const { sendEmail } = require("./sendEmail.js");

router.get("/products", productControllers.browse);

router.get("/products/:id", productControllers.getById);
router.put("/products/:id", productControllers.update);
router.post("/products", productControllers.post);
router.delete("/products/:id", productControllers.destroy);
// router.get("/products/:id", productControllers.read);
// router.get("/categories/:id", categoryControllers.read);
router.get("/productsdetails", productControllers.readProductsDetails);

router.post("/api/users", hashPassword, userControllers.postUser, sendEmail);

router.get("/categories", categoryControllers.getAll);
router.get("/categories/:id", categoryControllers.getById);
router.put("/categories/:id", categoryControllers.update);
router.post("/categories", categoryControllers.post);
router.delete("/categories/:id", categoryControllers.destroy);

router.get("/products-categories", productCategoryControllers.getAll);
router.get("/products-categories/:id", productCategoryControllers.getById);
router.put("/products-categories/:id", productCategoryControllers.update);
router.delete(
  "/products/:productId/categories/:categoryId",
  productCategoryControllers.removeCategory
);

router.post(
  "/products/:productId/categories/",
  productCategoryControllers.addCategory
);

router.get(
  "/products/:id/categories",
  productCategoryControllers.getAllByProductId
);
router.delete(
  "/products/:id/categories",
  productCategoryControllers.deleteAllByProductId
);

// router.get("/api/users", userControllers.getUsers);
router.post(
  "/api/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// router.get("/api/movies", movieControllers.getAll);
router.get("/api/teams", teamControllers.getAll);

// ROUTES PROTEGEES
// router.use(verifyToken);

router.get("/api/users", userControllers.getUsers);
router.get("/api/users/:id", verifyToken, userControllers.getUserById);

module.exports = router;
