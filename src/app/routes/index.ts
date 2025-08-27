import { Router } from "express";
import { postRoutes } from "../modules/post/post.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/post",
    route: postRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
