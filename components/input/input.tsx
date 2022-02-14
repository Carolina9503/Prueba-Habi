import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: React.HTMLInputTypeAttribute;
  register?: UseFormRegisterReturn;
}
const Input = ({ type = "text", register, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className={styles.input}
      {...register}
      {...props}
      autoComplete="off"
    />
  );
};
export default Input;
