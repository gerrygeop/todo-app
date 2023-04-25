import FormTodo from "@/components/FormTodo";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<div className="max-w-3xl mx-auto py-8">
				<h1 className="font-semibold text-lg mb-8">Hellow 👋</h1>

				<div className="bg-slate-100 p-6 overflow-hidden border shadow rounded-lg">
					<FormTodo />
				</div>
			</div>
		</main>
	);
}
