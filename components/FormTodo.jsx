"use client";
import Button from "./Button";
import Input from "./Input";

export default function FormTodo() {
	function handleOnSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<div className="grid grid-cols-1 gap-y-4">
				<div className="col-span-full">
					<label
						htmlFor="todo"
						className="block text-sm font-medium leading-6 text-gray-800"
					>
						New Task
					</label>
					<Input name="todo" />
				</div>
				<div className="my-4 border-t border-slate-200"></div>
				<div className="col-span-full flex items-center justify-end gap-x-4">
					<button
						type="button"
						className="px-3 py-2 font-medium leading-6 text-gray-900 border rounded-md"
					>
						Cancel
					</button>
					<Button type="submit">Save</Button>
				</div>
			</div>
		</form>
	);
}
