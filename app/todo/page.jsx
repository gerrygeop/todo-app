import Card from "@/components/Card";
import prisma from "@/lib/prisma";

async function getTodoList() {
	const data = await prisma.todo.findMany({
		select: {
			id: true,
			todo: true,
			date: true,
		},
	});
	return data;
}

export default async function Todo() {
	const todoLists = await getTodoList();

	return (
		<main>
			<div className="max-w-3xl mx-auto py-8">
				<h1 className="font-semibold text-lg mb-8">Hellow 👋</h1>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
					{todoLists.map((todoList) => (
						<Card
							todoList={todoList}
							key={todoList.id}
							className="col-span-1"
						/>
					))}
				</div>
			</div>
		</main>
	);
}
