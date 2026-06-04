import styles from "./input.module.css";

type RangeProps = {
  id: string;
  name: string;
  onChange: (value: number) => void;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
};

const Range: React.FC<RangeProps> = ({
  id,
  name,
  onChange,
  disabled,
  min = 0,
  max = 100,
  step = 1,
}) => {
  return (
    <label htmlFor={id}>
      <input
        type="range"
        id={id}
        name={name}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
        className={styles.rangeInput}
        min={min}
        max={max}
        step={step}
      />
    </label>
  );
};

export default Range;
