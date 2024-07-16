import React from "react";

const InputForm: React.FC<TInput> = (
  { type = "text", style = "primary", placeholder, label, value, onChange },
  props
) => {
  return (
    <div className="text-start mb-3">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={style}
        autocomplete="off"
        {...props}
      />
    </div>
  );
};

export default InputForm;
