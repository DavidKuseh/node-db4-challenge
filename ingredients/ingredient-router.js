const express = require('express');

const Ingredients = require('./ingredient-model.js');

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
    Ingredients.getRecipesByIngredient(req.params.id)
    .then(ingredients => {
        res.json(ingredients)
    })
    .catch(err => {
        res.status(500).json({ message: "No recipe with that ingredient" + err.message})
    })
})

module.exports = router;