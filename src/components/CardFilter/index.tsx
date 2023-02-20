import { ButtonFilter } from "../FilterButton";
import React from "react";
import "./styles.css";
import { FilterProps, FormDataProps } from "../../types";

export const CardFilter = ({ onFilter }: FilterProps) => {
  const [formData, setFormData] = React.useState<FormDataProps>({
    minPrice: 0,
    maxPrice: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onFilter(
      formData.minPrice ? Number(formData.minPrice) : 0,
      formData.maxPrice ? Number(formData.maxPrice) : Number.MAX_VALUE
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cart-filter-container">
        <div className="card-filter-content">
          <input
            name="minPrice"
            type="text"
            placeholder="Preço mínimo"
            value={formData.minPrice || ""}
            onChange={handleInputChange}
          />
          <input
            name="maxPrice"
            type="text"
            placeholder="Preço máximo"
            value={formData.maxPrice || ""}
            onChange={handleInputChange}
          />
          <ButtonFilter title="Filtrar" />
        </div>
      </div>
    </form>
  );
};
