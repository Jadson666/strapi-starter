const SQL = require("./sqlsToRun.js");

module.exports = class migrator1615522924107 {
  async up(queryRunner) {
    for (const sql of SQL) {
      await queryRunner.query(sql);
    }
  }

  async down(queryRunner) {}
};
