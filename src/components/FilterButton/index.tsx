import { ButtonProps } from "../../types";
import './styles.css'

export const ButtonFilter = ({ title }: ButtonProps) => {
  return <button type="submit">{title}</button>;
};
