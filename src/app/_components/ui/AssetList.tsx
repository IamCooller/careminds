import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Wallet } from "@/types";
import { formatCurrency } from "@/lib/formatters";
import { AssetIcon } from "./AssetIcon";

type AssetListProps = {
	displayAssets: Wallet["assets"];
};

export function AssetList({ displayAssets }: AssetListProps) {
	return (
		<div className="flex flex-col gap-2">
			<p className="text-xl font-medium text-black mb-2">Assets</p>
			<div className="border border-gray-200 rounded-lg overflow-hidden">
				<Table>
					<TableHeader>
						<TableRow className="bg-gray-100/30">
							<TableHead>Asset</TableHead>
							<TableHead>Type</TableHead>
							<TableHead className="text-right">Quantity</TableHead>
							<TableHead className="text-right">Purchase Price</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{displayAssets.map((asset, index) => (
							<TableRow key={index}>
								<TableCell>
									<div className="flex items-center gap-2">
										<AssetIcon symbol={asset.symbol} />
										<b>{asset.symbol}</b>
									</div>
								</TableCell>
								<TableCell>{asset.type.charAt(0).toUpperCase() + asset.type.slice(1)}</TableCell>
								<TableCell className="text-right">{asset.quantity.toString().replace(".", ",")}</TableCell>
								<TableCell className={`text-right font-medium ${asset.currentPrice > asset.purchasePrice ? "text-green-900" : ""}`}>
									{asset.purchasePrice >= 1000 ? formatCurrency(asset.purchasePrice).replace(",", "") : formatCurrency(asset.purchasePrice)}
								</TableCell>
							</TableRow>
						))}
						{displayAssets.length === 0 && (
							<TableRow>
								<TableCell colSpan={4} className="text-center py-4 text-gray-500">
									No assets found for this wallet
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
