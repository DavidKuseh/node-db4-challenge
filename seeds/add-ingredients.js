
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'gari'},
        { ingredient_name: 'sugar'},
        { ingredient_name: 'milk'},
        { ingredient_name: 'groundnuts'},
        { ingredient_name: 'oil'},
        { ingredient_name: 'dry pepper'},
        { ingredient_name: 'onions'}
      ]);
    });
};
