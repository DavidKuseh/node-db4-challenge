const db = require('../data/db-config');

module.exports = {
    getRecipes
};

function getRecipes() {
    return db('recipes')
}