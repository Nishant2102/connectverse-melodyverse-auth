import React, { useState } from "react";

const PasswordField = ({ name, value, onChange, placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative mb-4">
      <input
        type={show ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-2 top-2 text-sm text-gray-600"
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordField;