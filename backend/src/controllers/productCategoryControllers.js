const models = require("../models");

const getAll = (req, res) => {
  models.product_category
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAllByProductId = (req, res) => {
  models.product_category
    .findAllByProductId(req.params.id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getById = (req, res) => {
  models.product_category
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const update = (req, res) => {
  const productCategory = req.body;

  // TODO validations (length, format...)

  productCategory.id = parseInt(req.params.id, 10);

  models.product_category
    .update(productCategory)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addCategory = (req, res) => {
  const productCategory = req.body;

  const productId = parseInt(req.params.id, 10);

  // TODO validations (length, format...)

  models.product_category
    .insert(productId, productCategory.value)
    .then(([result]) => {
      res.location(`/product-categories/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const removeCategory = (req, res) => {
  const { productId } = req.params;
  const { categoryId } = req.params;

  models.product_category
    .removeCategoryFromProduct(productId, categoryId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteAllByProductId = (req, res) => {
  models.product_category
    .deleteByProductId(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAll,
  getAllByProductId,
  getById,
  update,
  addCategory,
  removeCategory,
  deleteAllByProductId,
};
