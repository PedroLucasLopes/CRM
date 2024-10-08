import React from "react";

const InputForm: React.FC<TInput> = ({
  type = "text",
  pattern = "primary",
  placeholder,
  label,
  value,
  onBlur,
  ...props
}) => {
  return (
    <div className="text-start mb-3">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        className={`${pattern} sm:bg-white`}
        autoComplete="off"
        {...props}
      />
    </div>
  );
};

export default InputForm;
