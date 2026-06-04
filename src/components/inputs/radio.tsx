import styles from "./input.module.css";

type RadioProps = {
  id: string;
  label: string;
  name: string;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

const Radio: React.FC<RadioProps> = ({
  id,
  label,
  name,
  onChange,
  disabled,
}) => {
  const radioClassName = disabled
    ? `${styles.disabledRadio} ${styles.customRadio}`
    : styles.customRadio;
  const labelClassName = disabled
    ? `${styles.disabledRadioLabel} ${styles.radioLabel}`
    : styles.radioLabel;

  return (
    <label className={styles.radioWrapper} htmlFor={id}>
      <input
        type="radio"
        id={id}
        name={name}
        className={styles.visuallyHiddenRadio}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className={radioClassName} aria-hidden="true" />
      <span className={labelClassName}>{label}</span>
    </label>
  );
};

export default Radio;
