const { Router } = require("express");
const { addUser} = require("./userController");
const { hashPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser, listUsers, updateUser, deleteUsers);
userRouter.post("/login", unHash, login);

module.exports = userRouter;

movieRouter.post("/user", addUser);
movieRouter.get("/user", listUsers);
movieRouter.put("/user", updateUser);
movieRouter.put("/user", deleteUsers);

module.exports= movieRouter; 