import React from "react";

type IngredientsProps = {
  ingredients: string[];
};

export const Ingredients = ({ ingredients }: IngredientsProps) => {
  console.log({ ingredients });
  return (
    <div>
      {ingredients.map((item) => (
        <label key={item}>
          {item}
          <input type="checkbox" name="ingredients" value={item} />
        </label>
      ))}
    </div>
  );
};
