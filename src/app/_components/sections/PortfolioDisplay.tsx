import React from "react";
import { Wallet } from "@/types";
import { WalletList } from "../ui/WalletList";
import { AssetList } from "../ui/AssetList";

export function PortfolioDisplay({ portfolio, wallet }: { portfolio: Wallet[]; wallet: string }) {
	const selectedWallet = portfolio.find((w) => w.walletName === wallet);

	// Display assets based on selection or show first wallet assets by default if nothing selected
	const displayAssets = selectedWallet ? selectedWallet.assets : portfolio.length > 0 ? portfolio[0].assets : [];
	return (
		<div className="grid md:grid-cols-2 gap-8 px-6 py-4 bg-white">
			{/* Wallets Section */}
			<WalletList portfolio={portfolio} selectedWallet={selectedWallet} />

			{/* Assets Section */}
			<AssetList displayAssets={displayAssets} walletName={selectedWallet?.walletName} />
		</div>
	);
}
