const AbstractManager = require("./AbstractManager");

class TeamManager extends AbstractManager {
  constructor() {
    super({ table: "team" });
  }

  insert(team) {
    return this.connection.query(
      `insert into ${this.table} (image, name) values (?, ?)`,
      [team.image]
    );
  }

  update(team) {
    return this.connection.query(
      `update ${this.table} set image, name = ?, ? where id = ?`,
      [team.image, team.name, team.id]
    );
  }
}

module.exports = TeamManager;
