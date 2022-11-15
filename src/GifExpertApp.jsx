import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Gatitos"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory.trim())) return;
    // Agrega caterogias al arreglo
    setCategories([newCategory, ...categories]);
    // setCategories((cats) => [...cats, 'Hola Mundo']);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <hr />
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
