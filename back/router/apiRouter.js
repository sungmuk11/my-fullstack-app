import express from "express";
import {
  join,
  login,
  logout,
  checkLogin,
  edit,
} from "../controllers/userController.js";

const apiRouter = express.Router();

apiRouter.post("/join", join);
apiRouter.post("/login", login);
apiRouter.post("/edit", edit);
apiRouter.get("/logout", logout);
apiRouter.get("/auth/status", checkLogin);

export default apiRouter;
