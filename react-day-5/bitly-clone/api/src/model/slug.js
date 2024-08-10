import { DataTypes } from "sequelize";
import { postgresConnection } from "../database/connection";
import User from "./user";

const Slug = postgresConnection.define(
  "Slug",
  {
    original_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortened_link: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    visit_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    created_by: {
      type: DataTypes.INTEGER, // Changed to INTEGER to store user ID
      allowNull: false,
      references: {
        model: User, // This is a reference to the User model
        key: "id", // This is the column name of the referenced model
      },
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

// Define the association
Slug.belongsTo(User, { foreignKey: "created_by", as: "creator" });

export default Slug;
