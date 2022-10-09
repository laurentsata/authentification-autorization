const AbstractManager = require("./AbstractManager");

class ProductCategoryManager extends AbstractManager {
  constructor() {
    super({ table: "product_category" });
  }

  findAllByProductId(id) {
    return this.connection.query(
      `
      select category.name, product.id from ${this.table}
      join product on product.id = product_category.product_id
      join category on category.id = product_category.category_id
      where product.id = ?
    `,
      [id]
    );
  }

  insert(productId, categoryId) {
    return this.connection.query(
      `insert into ${this.table} (product_id, category_id) values (?, ?)`,
      [productId, categoryId]
    );
  }

  update(productCategory) {
    return this.connection.query(
      `update ${this.table} set productId = ?, categoryId = ? where id = ?`,
      [
        productCategory.productId,
        productCategory.categoryId,
        productCategory.id,
      ]
    );
  }

  deleteByProductId(productId) {
    return this.connection.query(
      `delete from ${this.table} where product_id = ?`,
      [productId]
    );
  }

  removeCategoryFromProduct(productId, categoryId) {
    return this.connection.query(
      `delete from ${this.table} where product_id = ? and category_id = ?`,
      [productId, categoryId]
    );
  }
}

module.exports = ProductCategoryManager;
