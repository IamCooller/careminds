import "@/styles/globals.css";
import { inter } from "@/styles/fonts/fonts";

import { Metadata } from "next";
import { _siteUrl } from "@/lib/constants";

const url = new URL(_siteUrl.startsWith("http") ? _siteUrl : `https://${_siteUrl}`);

export const metadata: Metadata = {
	title: "Caremind",
	description: "Caremind",
	metadataBase: url,
	applicationName: "Caremind",
	keywords: ["caremind", "care", "mind"],
	authors: [{ name: "https://cyberfoxes.vercel.app/about" }],
	creator: "Illia",
	publisher: "Illia",
	robots: {
		index: false,
		follow: false,
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={"en"}>
			<body className={`${inter.variable} ${inter.className}   antialiased `}>
				<main className="min-h-screen bg-[#282C31] flex flex-col justify-center items-center ">{children}</main>
			</body>
		</html>
	);
}
