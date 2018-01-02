exports.up = function(knex, Promise) {
    return knex.schema.table('walk_thrus', function(t) {
        t.string('image').notNull().defaultTo('stock.png');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('walk_thrus', function(t) {
        t.dropColumn('quantity');
    });
};