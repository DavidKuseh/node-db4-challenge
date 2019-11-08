const express = require('express');

const Ingredients = require('./ingredient-model.js');

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
    const { id } = req.params;

    Ingredients.getRecipesByIngredient(id)
    .then(recipes => {
      if (recipes.length) {
        res.json(recipes);
      } else {
        res.status(404).json({ message: 'Could not find recipes for given ingredient' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' + err.message});
    });
})
 
module.exports = router;