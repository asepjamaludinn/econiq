import React from "react";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  clearError: () => void;
  wrapperClassName?: string;
}

export default function InputField({
  error,
  clearError,
  wrapperClassName = "",
  className = "",
  ...props
}: InputFieldProps) {
  return (
    <div className={`flex flex-col ${wrapperClassName}`}>
      <input
        {...props}
        onChange={(e) => {
          clearError();
          if (props.onChange) {
            props.onChange(e);
          }
        }}
        className={`w-full bg-brand-light text-foreground placeholder:text-zinc-400 p-3.5 md:p-4 rounded-xl font-medium outline-none border transition-colors ${
          error
            ? "border-red-500"
            : "border-transparent focus:border-brand-secondary/40"
        } ${className}`}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1.5 ml-1 font-medium">
          {error}
        </span>
      )}
    </div>
  );
}
