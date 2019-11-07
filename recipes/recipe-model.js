const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipes as r')
      .where('r.id','=',recipe_id)
      .join('recipes_ingredients as ri','r.id','ri.recipe_id')
      .join('ingredients as i', 'ri.ingredient_id', 'i.id')
      .select(
        'r.recipe_name',
        'i.ingredient_name',
        'ri.ingredient_quantity',
        'ri.unit'
      );
  }
  
  function getInstructions(recipe_id) {
    return db('recipes as r')
      .where('r.id','=', recipe_id)
      .join('steps as s', 'r.id', 's.recipe_id')
      .select('r.recipe_name', 's.step_number', 's.instructions');
  }