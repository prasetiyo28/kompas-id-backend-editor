'use strict';
module.exports = function(sequelize, DataTypes){
  const articles = sequelize.define('articles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING(50)
    },
    body: {
      type: DataTypes.STRING(50)
    },
    author_id: {
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {
    tableName:'articles'
  });
  articles.associate = function(models) {
    articles.belongsTo(models.users, {
      foreignKey: 'id',
    });
    
  };
  return articles;
};