const Users = require("./user.models");
const Tasks = require("./task.models");
const Category = require("./category.models");
 

const relatedModels = () => {
  // Tasks relacion entre Users y Posts
  // * BelongsTo
  // * hasMany

  Tasks.belongsTo(Users);
  Users.hasMany(Tasks);
  Tasks.belongsTo(Category);
  Category.hasMany(Tasks);
  
  // Users.hasMany(Tasks, {foreignKey: "username"}); // Un usuario puede tener varias tareas
  // Tasks.belongsTo(Users, {foreignKey: "username"}); // Una tarea pertenece solo a un usuario

  // //Relación entre las tablas.
  // Tasks.belongsTo(Category, {foreignKey: "categoryId"});
  // Category.hasMANY(Tasks, {foreignKey: "categoryId"});

  // Users.hasMany(Posts, { foreignKey: "author" });
  // Posts.belongsTo(Users, { as: "author_name", foreignKey: "author" });

  // // * Post - Categories
  // Categories.hasMany(Posts, { foreignKey: "categoryId" });
  // Posts.belongsTo(Categories, { foreignKey: "categoryId" });

  // // * users - Answers
  // Users.hasMany(Answers, { foreignKey: "author" });
  // Answers.belongsTo(Users, { foreignKey: "author" });

  // // * Anwers - Posts
  // Posts.hasMany(Answers, { foreignKey: "postId" });
  // Answers.belongsTo(Posts, { foreignKey: "postId" });
};

module.exports = relatedModels;