import { Wallet } from "@/types";
import path from "path";
import React from "react";
import fs from "fs";
const Page = () => {
	const filePath = path.join(process.cwd(), "data/portfolio.json");
	const data: Wallet[] = JSON.parse(fs.readFileSync(filePath, "utf8"));

	return <div>Caremind</div>;
};

export default Page;
