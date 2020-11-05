import { response, Router } from "express";
import roomsRoutes from "./roomsRoutes";

const routes = Router();

routes.use("/rooms", roomsRoutes);

export default routes;
