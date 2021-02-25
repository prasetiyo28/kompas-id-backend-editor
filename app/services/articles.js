const { articleById } = require('../controllers/ArticleController');
const DB = require('../models');
const Articles = DB.articles;
const Sequelize = DB.Sequelize;
const Op = Sequelize.Op;


exports.createArticles = async params => {
  return Articles.create(params);
};

exports.getAllArticles = async userId => {
    return Articles.findAll({
        where : {
            author_id : userId
        }
    });
  };

  exports.getArticlesById = async articleId => {
    return Articles.findOne({
        where : {
            id : articleId
        }
    });
  };

exports.updateUser = async params => {
  return Articles.update(params, {
    where: {
      id: params.id
    }
  });
};

exports.delete = async articlesId => {
  return Articles.destroy({
    where: {
      id: articlesId
    }
  });
};

exports.update = async params => {
  return Articles.update(params, {
    where: {
      id: params.id
    }
  });
};
