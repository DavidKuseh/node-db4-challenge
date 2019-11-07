const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
});

router.get("/:id/shoppingList", (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(list => {
            res.json(list);
        })
        .catch(err => {
    res.status(500).json({ message: "Failed to get shopping list." + err.message });
        });
});

router.get("/:id/instructions", (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(instruction => {
            res.json(instruction);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get instructions." + err.message});
        });
});

module.exports = router;