import express from "express";

// imports de módulos para validaciones
import { verifyToken } from "../utils/middleware/index.js";

// Módulos controladores importados
import { signIn } from "../controllers/signin.js";
import { signUp } from "../controllers/signup.js";
import { getUsers } from "../controllers/getUsers.js";
import {getUserById} from "../controllers/getUserById.js"
import { updateUser } from "../controllers/updateUser.js";
import { deleteUser } from "../controllers/deleteUser.js";

import { customers } from "../controllers/customers.js";
import { sales } from "../controllers/sales.js";
import { report } from "../controllers/report.js";
import { customersSearch } from "../controllers/customersSearch.js";
import { registerSale } from "../controllers/registerSale.js";

// creación del enrutador 
const router = express.Router();

// Routes
router.post("/signin", signIn);
router.post("/signup", signUp);
router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUserById);
router.put("/users/:id", verifyToken, updateUser);
router.delete('/users/:id', verifyToken, deleteUser);

router.get("/customers", verifyToken, customers);
router.route("/sales",).get(verifyToken, sales).post(verifyToken, registerSale);
router.get("/report", verifyToken, report);
router.get("/customers/search", verifyToken, customersSearch);

export default router;