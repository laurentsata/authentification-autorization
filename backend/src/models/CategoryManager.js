const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    return this.connection.query(
      `insert into ${this.table} (name, image) values (?, ?)`,
      [category.name, category.image]
    );
  }

  update(category) {
    return this.connection.query(
      `update ${this.table} set name, set image = ?, ? where id = ?`,
      [category.name, category.image, category.id]
    );
  }
  //   delete(category) {
  //     return this.connection.query(
  //         `delete from ${this.table} where id = ?` [
  //       category.id,
  //     ]);
  // }
}

module.exports = CategoryManager;
