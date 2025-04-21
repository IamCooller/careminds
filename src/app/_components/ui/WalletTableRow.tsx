"use client";

import React from "react";
import { Wallet } from "@/types";
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from "@/app/_utils/formatters";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface WalletTableRowProps {
	wallet: Wallet;
	index: number;
	isSelected: boolean;
}

export function WalletTableRow({ wallet, index, isSelected }: WalletTableRowProps) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const setWallet = (value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("wallet", value);
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<TableRow key={index} className={`cursor-pointer hover:bg-gray-50 ${isSelected ? "bg-blue-50" : ""}`} onClick={() => setWallet(wallet.walletName)}>
			<TableCell className="font-medium">{wallet.walletName}</TableCell>
			<TableCell className="text-right">{formatCurrency(wallet.currentAmount)}</TableCell>
			<TableCell className={`text-right ${wallet.profitLoss > 0 ? "text-green-500" : ""}`}>{formatCurrency(wallet.spentAmount)}</TableCell>
		</TableRow>
	);
}
