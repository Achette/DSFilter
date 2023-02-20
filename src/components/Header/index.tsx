import React from "react";
import { ContextNumberCount } from "../../context/context-product-count";
import "./styles.css";

export const Header = () => {
  const { contextNumberCount } = React.useContext(ContextNumberCount);

  return (
    <header className="header-container">
      <h1>DSFilter</h1>
      <ul>
        <li>
          {contextNumberCount > 1
            ? `${contextNumberCount} produtos`
            : `${contextNumberCount} produto`}
        </li>
      </ul>
    </header>
  );
};
