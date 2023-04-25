import prisma from "@/lib/prisma";

async function getTodo(id) {
	const data = await prisma.todo.findUnique({
		where: { id: +id },
	});

	return data;
}
export default async function DetailTodo({ params }) {
	const { id } = params;
	const todoList = await getTodo(id);

	return (
		<main>
			<div className="max-w-3xl mx-auto py-8">
				<h1 className="font-semibold text-lg mb-8">Hellow 👋</h1>

				<div className="bg-slate-100 dark:bg-slate-700/30 px-4 py-5 overflow-hidden border dark:border-slate-700 shadow rounded-md">
					<p className="text-slate-800 dark:text-white">{todoList.todo}</p>
					<span className="text-slate-600 dark:text-slate-300 text-sm italic">
						-- {todoList.date}
					</span>
				</div>
			</div>
		</main>
	);
}
