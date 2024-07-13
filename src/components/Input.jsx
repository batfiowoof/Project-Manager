import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, textArea, type, ...props },
  ref
) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-600">
        {label}
      </label>
      {textArea ? (
        <textarea
          ref={ref}
          className="my-1 bg-gray-700 border-b-2 w-full rounded-sm focus:outline-none focus:border-stone-600"
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className="my-1 bg-gray-700 border-b-2 w-full rounded-sm focus:outline-none focus:border-stone-600"
          type={type}
          {...props}
        />
      )}
    </p>
  );
});

export default Input;
