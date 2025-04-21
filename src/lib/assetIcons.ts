/**
 * Получает путь к SVG-иконке актива
 * @param symbol Символ актива (например, BTC, AAPL)
 * @returns Путь к иконке
 */
export const getAssetIconPath = (symbol: string): string => {
	return `/icons/${symbol.toLowerCase()}.svg`;
};
