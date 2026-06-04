import styles from "./input.module.css";

type SelectProps = {
  id: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
};

type OptionProps = {
  value: string;
  label: string;
  className?: string;
};

function Root({ id, onChange, disabled, children, className }: SelectProps) {
  const wrapperClassName = [styles.selectWrapper, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassName}>
      <select
        className={styles.select}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        id={id}
      >
        {children}
      </select>
      <div className={styles.dropdownIcon}>
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.76508 5.12713C4.36631 5.58759 3.652 5.58759 3.25323 5.12713L0.245975 1.65465C-0.3149 1.00701 0.145152 0 1.0019 0L7.01641 0C7.87316 0 8.33321 1.00701 7.77234 1.65465L4.76508 5.12713Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}

function Option({ value, label, className }: OptionProps) {
  return (
    <option value={value} className={className}>
      {label}
    </option>
  );
}

const Select = Object.assign(Root, {
  Option,
});

export default Select;
