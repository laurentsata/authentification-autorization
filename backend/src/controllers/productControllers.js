/* eslint-disable no-unused-expressions */
const models = require("../models");

const getAll = (req, res) => {
  models.product
    .findAllWithCategory()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getLatest = (req, res) => {
  models.product
    .findLatest()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browse = (req, res) => {
  models.product
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getById = (req, res) => {
  models.product
    .findWithCategory(req.params.id)
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

const read = (req, res) => {
  models.product
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
  const product = req.body;

  // TODO validations (length, format...)

  models.product.update(product).then(([result]) => {
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
  models.product
    .deleteCategories(product.id)
    .then(() => {
      for (let i = 0; i < product.categories.length; i += 1) {
        models.product.insertCategories(
          product.id,
          product.categories[i].value
        );
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const post = (req, res) => {
  const product = req.body;

  // TODO validations (length, format...)

  models.product
    .insert(product)
    .then(([result]) => {
      res
        .location(`/product/${result.insertId}`)
        .status(201)
        .send(`${result.insertId}`);
      product.categories &&
        product.categories.map((category) =>
          models.product.insertCategory(`${result.insertId}`, category.value)
        );
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.product
    .delete(req.params.id)
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
  models.product.deleteCategories(req.params.id);
};

module.exports = {
  browse,
  read,
  getAll,
  getLatest,
  getById,
  update,
  post,
  destroy,
};
