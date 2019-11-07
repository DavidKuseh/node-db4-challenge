
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { ingredient_quantity: 2, unit: 'cups', ingredient_id: 1, recipe_id:1},
        { ingredient_quantity: 0.5, unit: 'cups', ingredient_id:2, recipe_id:1} ,
        { ingredient_quantity: 0.5, unit: 'cups', ingredient_id:3, recipe_id:1 },
        { ingredient_quantity: 1, unit: 'cup', ingredient_id:4, recipe_id:1 },
        { ingredient_quantity: 50, unit: 'ml', ingredient_id:5, recipe_id:2 },
        { ingredient_quantity: 0.5, unit: 'cups', ingredient_id:6, recipe_id:2 },
        { ingredient_quantity: 20, unit: 'g', ingredient_id:7, recipe_id:2  },
      ]);
    });
};
