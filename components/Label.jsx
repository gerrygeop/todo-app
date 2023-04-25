export default function Label({ htmlFor, className, children }) {
	return (
		<label
			htmlFor={htmlFor}
			className={`block text-sm font-medium leading-6 text-slate-800 dark:text-slate-300 ${className}`}
		>
			{children}
		</label>
	);
}
