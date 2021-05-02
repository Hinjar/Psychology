import React from "react";
import TextField from "@material-ui/core/TextField";
import { Field } from "formik";

export const PsyInput: React.FC<any> = ({
  name,
  label,
  type = "text",
  required = false,
  error = false,
  errorMessage,
}) => {
  return (
    <div className="FormikField">
      <Field
        required={required}
        autoComplete="off"
        error={error}
        as={TextField}
        label={label}
        name={name}
        fullWidth
        type={type}
        helperText={errorMessage}
      />
    </div>
  );
};
