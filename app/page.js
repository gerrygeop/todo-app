import FormTodo from "@/components/FormTodo";

export default function Home() {
	return (
		<main>
			<div className="max-w-3xl mx-auto py-8">
				<h1 className="font-semibold text-lg mb-8">Hellow 👋</h1>

				<div className="bg-slate-100 dark:bg-slate-700/30 p-6 overflow-hidden border dark:border-cyan-500 shadow rounded-lg">
					<FormTodo />
				</div>
			</div>
		</main>
	);
}
