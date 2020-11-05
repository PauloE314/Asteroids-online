import { Router } from "express";
import RoomsController from "../controllers/RoomsController";

const routes = Router({ mergeParams: true });
const controller = new RoomsController();

routes.get("/", controller.list());

export default routes;
