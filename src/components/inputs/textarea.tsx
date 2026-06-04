import styles from "./input.module.css";

type TextAreaProps = {
  placeholder?: string;
  value?: string;
  id: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export default function TextArea({
  placeholder,
  value,
  id,
  onChange,
  disabled,
}: TextAreaProps) {
  return (
    <textarea
      className={styles.textInput}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}
