import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../button";
import { FormGroup } from "../../form-group";
import styles from "./form.module.css";

type FormAttr = {
  name: string;
  phone: string;
  namePizza: string;
  precio: string;
  fecha: string;
};
type FormProps = {
  menuName: string;
};

const initialValue: FormAttr = {
  name: "",
  phone: "",
  namePizza: "",
  precio: "",
  fecha: "",
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
      <h1>Informacion del Vendedor</h1>
      <FormGroup
        errors={errors}
        text="Nombre"
        inputProps={{
          register: {
            ...register("name", {
              required: "Nombre es requerido",
              pattern: {
                value: /^(\w+|\s*)+$/i,
                message: "Ingrese un nombre valido",
              },
            }),
          },
        }}
      />
      <FormGroup
        errors={errors}
        text="Telefono"
        inputProps={{
          register: {
            ...register("phone", {
              required: "Celular es requerido",
              pattern: {
                value: /^(\+|\s|\d*|\(|\))+$/i,
                message: "Ingrese un celular valido",
              },
            }),
          },
        }}
      />
      <FormGroup
        errors={errors}
        text="Nombre de la Pizza"
        inputProps={{
          register: {
            ...register("name", {
              required: "Nombre es requerido",
              pattern: {
                value: /^(\w+|\s*)+$/i,
                message: "Ingrese un nombre valido",
              },
            }),
          },
        }}
      />
      <FormGroup
        errors={errors}
        text="Precio"
        inputProps={{
          register: {
            ...register("precio", {
              required: "precio es requerido",
            }),
          },
        }}
      />
      <FormGroup
        errors={errors}
        text="Fecha"
        inputProps={{
          type: "date",
          register: {
            ...register("fecha", {
              required: "precio es requerido",
            }),
          },
        }}
      />

      <Button text="Enviar" />
    </form>
  );
};

export default Form;
