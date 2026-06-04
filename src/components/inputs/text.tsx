import styles from "./input.module.css";

type TextProps = {
  placeholder?: string;
  value?: string;
  id: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export default function Text({
  placeholder,
  value,
  id,
  onChange,
  disabled,
}: TextProps) {
  return (
    <input
      type="text"
      className={styles.textInput}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}
