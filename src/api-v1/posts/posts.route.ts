import { Router } from "express";
import Controller from "./posts.controller";

const posts: Router = Router();
const controller = new Controller();

posts.route("/").get(controller.getBlogs);

export default posts;
