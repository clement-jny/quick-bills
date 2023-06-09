import { Router } from "express";

import { home_router } from "./routes/home.routes";
// import upload_routes from "./routes/upload.routes";

export const index_router = Router();

index_router.use("/", home_router);
// router.use("/upload", upload_routes);