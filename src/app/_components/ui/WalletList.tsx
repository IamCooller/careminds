import React from "react";
import { Wallet } from "@/types";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { WalletTableRow } from "./WalletTableRow";

interface WalletListProps {
	portfolio: Wallet[];
	selectedWallet?: Wallet;
}

export function WalletList({ portfolio, selectedWallet }: WalletListProps) {
	return (
		<div className="flex flex-col gap-2">
			<p className="text-xl font-medium text-black mb-2">Wallets</p>
			<div className="border border-gray-200 rounded-lg overflow-hidden">
				<Table>
					<TableHeader>
						<TableRow className="bg-gray-100/30">
							<TableHead>Name</TableHead>
							<TableHead className="text-right">Current Amount</TableHead>
							<TableHead className="text-right">Spent Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{portfolio.map((wallet, index) => (
							<WalletTableRow key={index} wallet={wallet} index={index} isSelected={selectedWallet === wallet} />
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
