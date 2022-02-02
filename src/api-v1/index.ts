import { Router } from "express";

import users from "./users/users.route";
import posts from "./posts/posts.route";

const router: Router = Router();

router.use("/users", users);
router.use("/posts", posts);

export default router;
