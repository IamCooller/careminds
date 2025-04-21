import { getPortfolio } from "@/services/portfolio";
import React from "react";
import { PortfolioDisplay } from "@/app/_components/sections/PortfolioDisplay";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
	const { wallet } = await searchParams;
	const portfolio = await getPortfolio();
	return (
		<section className="">
			<div className="container py-4">
				<div className="border border-gray-400 rounded-xl overflow-hidden">
					<div className="px-6 py-4 bg-[#1F2226] text-white text-2xl font-bold">Investment Portfolio</div>
					<PortfolioDisplay portfolio={portfolio} wallet={wallet as string} />
				</div>
			</div>
		</section>
	);
};

export default Page;
