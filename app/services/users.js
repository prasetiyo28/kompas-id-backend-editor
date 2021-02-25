const DB = require('../models');
const Users = DB.users;
const Sequelize = DB.Sequelize;
const Op = Sequelize.Op;

exports.getUserByEmailUsername = async params => {
  return Users.findOne({
    where: {
      [Op.or]: {
        email: params.username,
        username: params.username
      }
    }
  });
};

exports.getUserById = async (userId) => {
  return Users.findOne({
    where: {
      id: userId
    }
  });
};

exports.GetAllUser = async () => {
  return Users.findAll();
};

exports.checkExist = async params => {
  return Users.findOne({
    where: {
      [Op.or]: {
        email: params.email,
        username: params.username
      }
    }
  });
};

exports.createUser = async params => {
  return Users.create(params);
};

exports.updateUser = async params => {
  return Users.update(params, {
    where: {
      id: params.id
    }
  });
};

exports.delete = async userId => {
  return Users.destroy({
    where: {
      id: userId
    }
  });
};

exports.update = async params => {
  return Users.update(params, {
    where: {
      id: params.id
    }
  });
};
