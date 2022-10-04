const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  insert(producttoto) {
    return this.connection.query(
      `insert into ${this.table} (name, price, image, describe, category, energy_id) values (?, ?, ?, ?, ?, ?, ?)`,
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
      `update ${this.table} set name = ?, image = ?, describe = ?, price = ?, category_id = ?, energy_id = ? where id = ?`,
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

  getProductsDetails() {
    return this.connection.query(
      `
      select product.id,
      product.describe,
      product.name,
      product.image,
      product.price,
      product_category.name as category,
      energy.name as energy_id from ${this.table}
      join product_category on product.category=product_category.id
      join energy on product.energy_id=energy.id;
      `
    );
  }
}

module.exports = ProductManager;
