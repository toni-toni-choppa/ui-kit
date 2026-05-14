import input from "./input.module.css";

type CheckboxProps = {
    id: string;
    label: string;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, onChange, disabled }) => {
    return (
        <div className={input.checkboxWrapper}>
            <input
                type="checkbox"
                id={id}
                className={input.checkbox}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
            />
            <label htmlFor={id} className={input.checkboxLabel}>{label}</label>
        </div>
    );
}

export default Checkbox;