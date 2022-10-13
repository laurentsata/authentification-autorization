/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  insert(producttoto) {
    return this.connection.query(
      `insert into ${this.table} (name, price, image, description, category, energy_id) values (?, ?, ?, ?, ?, ?)`,
      [
        producttoto.name,
        producttoto.image,
        producttoto.describe,
        producttoto.price,
        producttoto.category,
        producttoto.energy_id,
        producttoto.id,
      ]
    );
  }

  update(producttata) {
    return this.connection.query(
      `update ${this.table} set name = ?, image = ?, description = ?, price = ?, category_id = ?, energy_id = ? where id = ?`,
      [
        producttata.name,
        producttata.image,
        producttata.describe,
        producttata.price,
        producttata.category,
        producttata.energy_id,
        producttata.id,
      ]
    );
  }

  findAllWithCategory() {
    return this.connection
      .query(`select product.id, product.name, product.price, product.image, product.description, energy.name, energy.image as energy_id, JSON_ARRAYAGG(JSON_OBJECT("ID", category.id, "Type", category.name)) as categories from ${this.table}
    left join product_category ON product_category.product_id = product.id
    left join category on product_category.category_id = category.id
    join energy on product.energy_id = energy.id
    group by product.id`);
  }

  findWithCategory(id) {
    return this.connection.query(
      `select product.id, product.name, product.price, product.image, product.decribe, energy.name, energy.image as energy_id, JSON_ARRAYAGG(JSON_OBJECT("ID", category.id, "Type", category.name)) as categories from ${this.table}
      left join product_category ON product_category.product_id = product.id
      left join category on product_category.category_id = category.id where product.id = ?`,
      [id]
    );
  }

  // eslint-disable-next-line no-dupe-class-members
  insert(product) {
    return this.connection.query(
      `insert into ${this.table} (name, price, image, description, energy_id) values (?, ?, ?, ?, ?)`,
      [
        product.name,
        product.price,
        product.image,
        product.description,
        product.energy_id,
      ]
    );
  }

  insertCategories(productId, category) {
    return this.connection.query(
      `insert into product_category (product_id, category_id) values (?, ?)`,
      [productId, category]
    );
  }

  deleteCategories(productId) {
    return this.connection.query(
      `delete from product_category where product_id = ?`,
      [productId]
    );
  }

  getProductsDetails() {
    return this.connection.query(
      `
      select product.id,
      product.description,
      product.name,
      product.image,
      product.price,
      product_category.name as category,
      energy.name, energy.image as energy_id from ${this.table}
      join product_category on product.category=product_category.id
      join energy on product.energy_id=energy.id;
      `
    );
  }
}

module.exports = ProductManager;
