export default function Input({
	type = "text",
	name,
	classname = "",
	placeholder = "",
}) {
	return (
		<input
			type={type}
			name={name}
			className={`block mt-2 w-full rounded-md border-0 py-2.5 text-slate-900 dark:text-slate-50 dark:bg-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:leading-6 ${classname}`}
			placeholder={placeholder}
		/>
	);
}
