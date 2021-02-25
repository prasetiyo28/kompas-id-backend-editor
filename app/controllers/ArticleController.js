const Articles = require('../services/articles');
const bcrypt = require('bcrypt');

exports.getAllArticle = async (req, res, next) => {
  try {
    user = req.user
    const result = await Articles.getAllArticles(user.user_id);
    return MSG.sendResponse(res, 'GET_ALL_ARTICLE_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'GET_ALL_ARTICLE_FAILED');
  }
};

// exports.userProfile = async (req, res, next) => {
//   try {
//     const user = req.user;
//     const result = await Users.getUserById(user.user_id);
//     return MSG.sendResponse(res, 'GET_PROFILE_SUCCESS', result, true);
//   } catch (error) {
//     console.log(error);
//     return MSG.sendResponse(res, 'GET_PROFILE_FAILED');
//   }
// };

exports.articleById = async (req, res, next) => {
  try {
    const result = await Articles.getArticlesById(req.params.id);
    return MSG.sendResponse(res, 'GET_ARTICLE_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'GET_ARTICLE_FAILED');
  }
};

exports.createArticle = async (req, res, next) => {
  try {
    const params = req.body;
    params.author_id = req.user.user_id
    const result = await Articles.createArticles(params);
    return MSG.sendResponse(res, 'CREATE_ARTICLE_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'CREATE_ARTICLE_FAILED');
  }
};

exports.updateArticle = async (req, res, next) => {
  try {
    const params = req.body;
    const result = await Articles.update(params);
    return MSG.sendResponse(res, 'UPDATE_ARTICLE_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'UPDATE_ARTICLE_FAILED');
  }
};

exports.deleteArticle = async (req, res, next) => {
  try {
    const result = await Articles.delete(req.params.id);
    return MSG.sendResponse(res, 'DELETE_ARTICLE_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'DELETE_ARTICLE_FAILED');
  }
};
