import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../button";
import { ingredientes } from "../../../utils/ingredientes/ingredientes";
import { Select } from "../../select";
import styles from "./form.module.css";
import { Ingredients } from "../../ingredients/ingredients";

type FormAttr = {
  name: string;
  img: string;
  ingredientes: string;
};
type FormProps = {
  menuName: string;
};

const initialValue: FormAttr = {
  name: "",
  img: "",
  ingredientes: "",
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormAttr>();

  const onSubmit = handleSubmit((data) => {
    console.log({ data });
    reset(initialValue);
  });

  return (
    <form onSubmit={onSubmit} noValidate className={styles.form}>
      <h1>Crear Pizza</h1>
      <Ingredients ingredients={ingredientes} />

      <Button text="Enviar" />
    </form>
  );
};

export default Form;
