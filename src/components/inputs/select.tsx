import Input from "./input.module.css";

type SelectProps = {
    onChange?: (value: string) => void;
    disabled?: boolean;
    children: React.ReactNode;
};

type OptionProps = {
    value: string;
    label: string;
};

function Root({ onChange, disabled, children }: SelectProps) {
    return (
        <select onChange={(e) => onChange?.(e.target.value)} disabled={disabled} className={Input.select}>
            {children}
        </select>
    )
}

function Option({ value, label }: OptionProps) {
    return (
        <option value={value}>{label}</option>
    )
}

const Select = Object.assign(Root, {
    Option
});

export default Select;