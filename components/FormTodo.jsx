"use client";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { useRouter } from "next/navigation";

export default function FormTodo() {
	const router = useRouter();

	async function handleOnSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const res = await fetch("/api/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				todo: formData.get("todo"),
				date: formData.get("date"),
				time: formData.get("time"),
			}),
		});

		const data = await res.json();
		console.log(data);
		e.target.reset();
		router.refresh();
		router.push("/todo");
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<div className="grid grid-cols-1 gap-y-4">
				<div className="col-span-full">
					<Label htmlFor="todo">New Task</Label>
					<Input name="todo" placeholder="What do you wanna do?" />
				</div>

				<div className="col-span-full">
					<Label htmlFor="date">Date</Label>
					<Input type="date" name="date" />
				</div>

				<div className="col-span-full">
					<Label htmlFor="time">Time</Label>
					<Input type="time" name="time" />
				</div>
				<div className="my-4 border-t border-slate-200"></div>
				<div className="col-span-full flex items-center justify-end gap-x-4">
					<Button type="submit">Save</Button>
				</div>
			</div>
		</form>
	);
}
