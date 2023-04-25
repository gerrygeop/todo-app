"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
	const path = usePathname();
	const active = href === path;

	return (
		<Link
			className={
				active
					? "text-cyan-300 font-semibold underline decoration-wavy"
					: "text-slate-100 font-normal"
			}
			href={href}
		>
			{children}
		</Link>
	);
}
