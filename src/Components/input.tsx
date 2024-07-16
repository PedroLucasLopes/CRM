import React from "react";

const input: React.FC<TInput> = (
  { value, type = "text", placeholder, label, onChange },
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
        className="w-full h-full bg-transparent text-slate-900 font-mono outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-midorange"
        {...props}
      />
    </div>
  );
};

export default input;
