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
        <div className={input.radioWrapper}>
            <input
                type="radio"
                id={id}
                name={name}
                className={input.radio}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
            />
            <label htmlFor={id} className={input.radioLabel}>{label}</label>
        </div>
    );
}

export default Radio;