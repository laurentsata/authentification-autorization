const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  // select(category) {
  //   return this.connection.query(
  //     `select from ${this.table} (name, image) value (?, ?)`,
  //     [category.name, category.image]
  //   );
  // }

  insert(category) {
    return this.connection.query(
      `insert into ${this.table} (name, image) values (?, ?)`,
      [category.name, category.image]
    );
  }

  update(category) {
    return this.connection.query(
      `update from ${this.table} set name = ?, image = ?, ? where id = ?`,
      [category.name, category.image, category.id]
    );
  }

  delete(category) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      category.id,
    ]);
  }
}

module.exports = CategoryManager;
