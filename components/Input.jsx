export default function Input({
	type = "text",
	name,
	classname = "",
	placeholder = "Add task",
}) {
	return (
		<input
			type={type}
			id={name}
			name={name}
			className={`block mt-2 w-full rounded-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 ${classname}`}
			placeholder={placeholder}
		/>
	);
}
