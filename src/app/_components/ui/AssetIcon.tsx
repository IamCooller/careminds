import React from "react";
import Image from "next/image";
import { getAssetIconPath } from "@/lib/assetIcons";

type AssetIconProps = {
	symbol: string;
	size?: number;
	className?: string;
};

export function AssetIcon({ symbol, size = 20, className = "" }: AssetIconProps) {
	return (
		<div className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden  ${className}`}>
			<Image src={getAssetIconPath(symbol)} alt={`${symbol} icon`} width={size} height={size} className="object-contain" />
		</div>
	);
}
