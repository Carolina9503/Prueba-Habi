import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./select.module.css";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  register?: UseFormRegisterReturn;
  itemText: string;
  itemValue?: string;
  items: Array<Record<string, string>>;
}
const Select = ({
  register,
  items,
  itemValue,
  itemText,
  ...props
}: SelectProps) => {
  const onClick = () => {};
  return (
    <select
      className={styles.select}
      {...register}
      {...props}
      multiple
      onClick={onClick}
    >
      <option value="">Seleccione...</option>
      {items.map((item) => (
        <option
          className={styles.select__option}
          key={item[itemValue ?? itemText]}
        >
          {item[itemText]}
        </option>
      ))}
    </select>
  );
};
export default Select;
