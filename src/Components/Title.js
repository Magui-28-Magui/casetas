import React from "react";

const Title = (props) => {
  const { title } = props;
  return (
    <div className="container-fluid">
      <h2 className="h2 text-info mt-3 mb-5">{title}</h2>
    </div>
  );
};

export default Title;
