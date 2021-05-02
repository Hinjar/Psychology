import { Form, Formik } from "formik";
import React from "react";
import { PsyInput } from "../psy-input/PsyInput";
import { Button } from "@material-ui/core";
import {
  productFormInitialValues,
  productFormValidationSchema,
} from "../../../core/const/writing-form.const";
import "./WritingForm.css";

export const WritingForm: React.FC<any> = ({ handleSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={productFormInitialValues}
        onSubmit={handleSubmit}
        validationSchema={productFormValidationSchema}
      >
        {({ errors, isValid, setFieldValue, touched }) => {
          return (
            <Form className="form">
              <span className="form-title">Записаться на прием</span>
              <PsyInput
                error={Boolean(errors.name) && touched.name}
                errorMessage={errors.name}
                name="name"
                label="Название"
              />
              <PsyInput
                error={Boolean(errors.description) && touched.description}
                errorMessage={errors.description}
                name="description"
                label="Описание"
              />
              <Button
                className="add-button"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!isValid}
                type="submit"
              >
                Записаться
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
