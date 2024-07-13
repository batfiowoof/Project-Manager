export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 my-1 text-xs md:text-base rounded-md bg-gray-600 text-stone-300 hover:bg-gray-500 hover:text-stone-200"
    >
      {children}
    </button>
  );
}
