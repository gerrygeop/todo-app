export default function Label({ htmlFor, className, children }) {
	return (
		<label
			htmlFor={htmlFor}
			className={`block text-sm font-medium leading-6 text-gray-800 ${className}`}
		>
			{children}
		</label>
	);
}
