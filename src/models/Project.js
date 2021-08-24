import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Task from "./Task";

const Project = sequelize.define(
  "projects",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    priority: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT,
    },
    delivarydate: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

Project.hasMany(Task, { foreingKey: "projectId", sourceKey: "id" });
Task.belongsTo(Project, { foreingKey: "projectId", sourceKey: "id" });

export default Project;
