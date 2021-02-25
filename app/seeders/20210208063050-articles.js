'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('articles', 
   [{
    id: 1,
    title: 'title example',
    body: 'body example',
    author_id: '1',
    createdAt: new Date(),
    updatedAt: new Date()
  },
]
  , {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('articles', null, {});
  }
};
