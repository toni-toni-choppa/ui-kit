import input from "./input.module.css";

type CheckboxProps = {
    id: string;
    label: string;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, onChange, disabled }) => {
    return (
        <label className={input.checkboxWrapper} htmlFor={id}>
            <input
                type="checkbox"
                id={id}
                className={input.visuallyHiddenCheckbox}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
            />
            <span className={disabled ? `${input.disabledCheckbox} ${input.customCheckbox}` : input.customCheckbox} aria-hidden="true" />
            <span className={disabled ? `${input.disabledCheckboxLabel} ${input.checkboxLabel}` : input.checkboxLabel}>{label}</span>
        </label>
    );
}

export default Checkbox;