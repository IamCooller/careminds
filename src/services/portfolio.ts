"use server";

import { Wallet } from "@/types";
import portfolio from "@/data/portfolio.json";

export const getPortfolio = async (): Promise<Wallet[]> => {
	return portfolio as Wallet[];
};
