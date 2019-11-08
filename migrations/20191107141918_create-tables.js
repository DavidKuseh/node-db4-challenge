
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', table => {
      table.increments();
      table.text('recipe_name', 128)
      .unique()
      .notNullable();
    })
    .createTable('steps', table => {
        table.increments();
        table.integer('step_number')
        .unsigned()
        .notNullable()
        table.text('instructions');
        table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable('ingredients', table => {
      table.increments();
      table.text('ingredient_name', 128)
      .notNullable()
      .unique();
  })
    .createTable('recipes_ingredients', table => {
        table.increments();
        table.float('ingredient_quantity');
        table.text('unit')
        .notNullable()
        table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
