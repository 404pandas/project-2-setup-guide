const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// import bcrypt here (hint- use your activities!)

class User extends Model {
  // Add a new method to the User class that checks if an unhashed password entered by the user can be compared to the hashed password stored in the database (hint- use your activities!)
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Add any new columns to the User model here
  },
  {
    hooks: {
      // Add any hooks to the User model that will hash the password before a new user is created here (hint- use your activities!)
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
