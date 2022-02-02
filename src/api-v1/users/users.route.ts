import { Router } from "express";
import Controller from "./users.controller";

const users: Router = Router();
const controller = new Controller();

users
  .route("/")
  .post(controller.createUser)
  .get(controller.getUser)
  .put(controller.updateUser)
  .delete(controller.deleteUser);

export default users;
