const reletedModels = () => {

    const Users = require('./user.models');
    const Posts = require('./post.models');
    const Categories = require('./category.models');
    const Answers = require('./answer.models');

    //Todo relacion entre Users y post
    // * BelongsTo
    // * hasMany
    Users.hasMany(Posts, {foreignKey: "author"});
    Posts.belongsTo(Users, {foreignKey: "author"});

    // *  Post - categories
    Categories.hasMany(Posts, {foreignKey: "category_id"});
    Posts.belongsTo(Categories, {foreignKey: "category_id"});

    // *  users - answers
    Users.hasMany(Answers, {foreignKey: "author"});
    Answers.belongsTo(Users, {foreignKey: "author"});

    // *  answers - users
    Posts.hasMany(Answers, {foreignKey: "postId"});
    Answers.belongsTo(Posts, {foreignKey: "postId"});


};

module.exports = reletedModels;