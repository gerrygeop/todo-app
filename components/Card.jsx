"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Card({ todoList, className }) {
	const router = useRouter();

	async function deleteTodo(id) {
		const res = await fetch(`/api/todos/${id}`, {
			method: "DELETE",
		});
		const data = await res.json();
		console.log(data);
		router.refresh();
	}
	return (
		<div
			className={`relative group bg-slate-100 px-4 py-5 overflow-hidden border shadow rounded-md hover:bg-slate-200 hover:border-cyan-500 hover:-translate-y-1 transition duration-150 ${className}`}
		>
			<button
				type="button"
				onClick={() => deleteTodo(todoList.id)}
				className="opacity-0 group-hover:opacity-100 absolute top-1 right-1 z-50 p-2 bg-white shadow rounded-md text-red-500 transition duration-200"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-5 h-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
			<Link href={`/todo/${todoList.id}`} className="w-full h-full">
				<p className="text-slate-800">{todoList.todo}</p>
				<span className="text-slate-600 text-sm italic">
					-- {todoList.date}
				</span>
			</Link>
		</div>
	);
}
