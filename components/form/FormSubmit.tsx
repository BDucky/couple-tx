import React from "react";

const FormSubmit = ({ handleSubmit = () => {}, children, ...props }: any) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off" {...props}>
      {children}
    </form>
  );
};

export default FormSubmit;
