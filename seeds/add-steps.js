
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step_number: '1', instructions:'pour water into gari', recipe_id: '1'  },
        { step_number: '2', instructions:'add all other ingredients into gari bowl', recipe_id: '1'  },
        { step_number: '1', instructions:'boil bambara beans', recipe_id: '2'  },
        { step_number: '2', instructions:'fry onions and add pepper when serving', recipe_id: '2'  }
      ]);
    });
};
