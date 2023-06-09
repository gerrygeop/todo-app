import NavLink from "@/components/NavLink";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Todo App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-slate-900 text-slate-50`}>
				<nav className="p-4 border-b border-slate-700">
					<ul className="max-w-3xl mx-auto flex items-center gap-x-6">
						<NavLink href="/">+ New</NavLink>
						<NavLink href="/todo">Todo</NavLink>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
