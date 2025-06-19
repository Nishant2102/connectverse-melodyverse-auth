import React from "react";

const InputField = ({ type = "text", name, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 mb-4 border border-gray-300 rounded"
      required
    />
  );
};

export default InputField;