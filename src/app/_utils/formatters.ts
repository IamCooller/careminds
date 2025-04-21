// Helper function to format numbers as currency
export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: value % 1 === 0 ? 0 : 2,
		maximumFractionDigits: 2,
	}).format(value);
};

// Helper to get background color for asset icons
export const getAssetColor = (symbol: string) => {
	const colors: Record<string, string> = {
		AAPL: "bg-black",
		ETH: "bg-blue-500",
		BTC: "bg-amber-500",
		SOL: "bg-purple-500",
		MSFT: "bg-blue-700",
		ADA: "bg-blue-400",
		AVAX: "bg-red-500",
		DOT: "bg-pink-500",
		GOOGL: "bg-green-500",
		TSLA: "bg-red-600",
		NVDA: "bg-green-600",
		MATIC: "bg-indigo-500",
	};
	return colors[symbol] || "bg-gray-500";
};
