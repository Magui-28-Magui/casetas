import React from "react";

const Alert = ({ message, type }) => {
  return (
    <div className={"alert mt-5 alert-" + type} role="alert">
      <div className="text-center"><b>{message}</b></div>
    </div>
  );
};

export default Alert;
