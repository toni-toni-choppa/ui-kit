import styles from "./input.module.css";

type CheckboxProps = {
  id: string;
  label: string;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  onChange,
  disabled,
}) => {
  const checkboxClassName = disabled
    ? `${styles.disabledCheckbox} ${styles.customCheckbox}`
    : styles.customCheckbox;
  const labelClassName = disabled
    ? `${styles.disabledCheckboxLabel} ${styles.checkboxLabel}`
    : styles.checkboxLabel;

  return (
    <label className={styles.checkboxWrapper} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        className={styles.visuallyHiddenCheckbox}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className={checkboxClassName} aria-hidden="true" />
      <span className={labelClassName}>{label}</span>
    </label>
  );
};

export default Checkbox;
