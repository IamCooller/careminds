export type AssetType = "stock" | "crypto";

export type Asset = {
	type: AssetType;
	symbol: string;
	name: string;
	quantity: number;
	purchasePrice: number;
	currentPrice: number;
};

export type Wallet = {
	walletName: string;
	currentAmount: number;
	spentAmount: number;
	profitLoss: number;
	assets: Asset[];
};
