import input from "./input.module.css";

type RadioProps = {
    id: string;
    label: string;
    name: string;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

const Radio: React.FC<RadioProps> = ({ id, label, name, onChange, disabled }) => {
    return (
        <label className={input.radioWrapper} htmlFor={id}>
            <input
                type="radio"
                id={id}
                name={name}
                className={input.visuallyHiddenRadio}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
            />
            <span className={disabled ? `${input.disabledRadio} ${input.customRadio}` : input.customRadio} aria-hidden="true" />
            <span className={disabled ? `${input.disabledRadioLabel} ${input.radioLabel}` : input.radioLabel}>{label}</span>
        </label>
    );
}

export default Radio;