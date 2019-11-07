const db = require('../data/db-config');

module.exports = {
    getRecipesByIngredient
};

function getRecipesByIngredient(id) {
    return db('recipes_ingredients as ri')
    .where('ri.ingredient_id','=',id)
    .join('recipes as r', 'r.id', 'ri.recipe_id')
    .select(
        'r.recipe_name'
    );
}