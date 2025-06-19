import React from "react";

const AlertMessage = ({ message, type = "error" }) => {
  const styles = {
    error: "text-red-500",
    success: "text-green-500",
  };

  return <p className={`${styles[type]} mb-4`}>{message}</p>;
};

export default AlertMessage;