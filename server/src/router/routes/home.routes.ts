import { Router } from "express";

export const home_router = Router();

home_router.get("/", (req, res) => {
	console.log(req.body);
	
	res.status(200).json({ message: "Hello World!" });
});