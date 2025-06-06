// Helper function to format numbers as currency
export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: value % 1 === 0 ? 0 : 2,
		maximumFractionDigits: 2,
	}).format(value);
};
