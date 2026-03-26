import React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  clearError: () => void;
  wrapperClassName?: string;
  options: SelectOption[];
  placeholderText?: string;
}

export default function SelectField({
  error,
  clearError,
  wrapperClassName = "",
  className = "",
  options,
  placeholderText = "Pilih salah satu",
  ...props
}: SelectFieldProps) {
  return (
    <div className={`flex flex-col ${wrapperClassName}`}>
      <select
        {...props}
        onChange={(e) => {
          clearError();
          if (props.onChange) {
            props.onChange(e);
          }
        }}
        className={`w-full bg-brand-light text-foreground p-3.5 md:p-4 rounded-xl font-medium outline-none border transition-colors appearance-none cursor-pointer ${
          error
            ? "border-red-500"
            : "border-transparent focus:border-brand-secondary/40"
        } ${className}`}
        style={{
          backgroundImage: `url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%2352525b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1rem center",
          backgroundSize: "1.2em",
          ...props.style,
        }}
      >
        <option value="" disabled hidden>
          {placeholderText}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-red-500 text-sm mt-1.5 ml-1 font-medium">
          {error}
        </span>
      )}
    </div>
  );
}
