import * as Yup from "yup";

export const productFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  description: Yup.string().required("Обязательное поле"),
  price: Yup.number().required("Обязательное поле"),
  quantity: Yup.number().required("Обязательное поле"),
  category: Yup.string().required("Добавьте категорию"),
  photo: Yup.string().required("Обязательное поле"),
});

export const productFormInitialValues: any = {
  id: 0,
  name: "",
  description: "",
  price: 0,
  quantity: 0,
  category: "",
  photo: "",
};
