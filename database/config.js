const { Sequelize, DataTypes } = require('sequelize');
const { createDatabase } = require('./createDatabase');

const FolderModel = require('../models/folder');
const TaskModel = require('../models/task');
const UserModel = require('../models/user');

createDatabase();
const sequelize = new Sequelize('ensolvers_todo', 'root', 'root', {
  host: 'localhost',
  dialect:  'mysql',
  define: {
    timestamps: false,
    underscored: true,
  }
});

const Folder = FolderModel(sequelize,DataTypes);
const Task = TaskModel(sequelize,DataTypes);
const User = UserModel(sequelize, DataTypes);
Task.associate(sequelize.models);
Folder.associate(sequelize.models);
sequelize.sync({force: false})
  .then(() => {
    console.log('DataBase Connected');
    createUser()
  })
  .catch((err) => {
    console.log(err);
  })
  const createUser = async () => {
    try {
      await User.findOrCreate({
        where: { id:1, email: 'admin@admin.com', password: 'admin' },
      });
    } catch (error) {
      console.log(error);
    }
  };
module.exports = {
  Task,
  Folder,
  User
}