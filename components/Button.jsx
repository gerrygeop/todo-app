export default function Button({ type, classname = "", children }) {
	return (
		<button
			type={type}
			className={`px-4 py-2 font-medium shadow-sm rounded bg-cyan-600 text-white hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 ${classname}`}
		>
			{children}
		</button>
	);
}
