import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import categoriesRoutes from "./routes/categories.routes";
import loginRoutes from "./routes/login.routes";
import realEstateRoutes from "./routes/realEstate.routes";
import schedulesRoutes from "./routes/schedules.routes";
import userRoutes from "./routes/user.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", schedulesRoutes);

app.use(handleErrors);

export default app;
