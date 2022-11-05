import React from "react";
import styles from "../css/chip.module.css";

interface IProps {
  type: "filled" | "outlined";
  size: "sm" | "md";
  label: string;
  closeIcon?: boolean;
}

const Chip: React.FC<IProps> = (props) => {
  const { size, type, label, closeIcon } = props;

  return (
    <div className={`${styles.chip} ${styles[size]} ${styles[type]}`}>
      <span className={`${styles.label}`}>{label}</span>
      {closeIcon && <span className={`${styles.chip_close}`}></span>}
    </div>
  );
};

export default Chip;
