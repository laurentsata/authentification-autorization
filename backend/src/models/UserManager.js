const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findUserByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  insert(user) {
    return this.connection.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, hashedPassword) VALUES (?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.hashedPassword]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set email = ?, firstname = ?, lastname = ? where id = ?`,
      [user.email, user.firstname, user.lastname]
    );
  }
}

module.exports = UserManager;
