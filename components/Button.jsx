export default function Button({ type, classname = "", children }) {
	return (
		<button
			type={type}
			className={`px-3 py-2 font-medium shadow-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${classname}`}
		>
			{children}
		</button>
	);
}
