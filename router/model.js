const Sequelize = require("sequelize");
const db = require("../database/db");

const Articles = db.define("article", {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  score: Sequelize.VIRTUAL
});

module.exports = Articles;
