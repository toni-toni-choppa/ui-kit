import Input from "./input.module.css";

type SelectProps = {
    onChange?: (value: string) => void;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string; // Allow customization of the select wrapper
};

type OptionProps = {
    value: string;
    label: string;
    className?: string; // Allow customization of individual options
};

function Root({ onChange, disabled, children, className }: SelectProps) {
    return (
        <select
            onChange={(e) => onChange?.(e.target.value)}
            disabled={disabled}
            className={`${Input.select} ${className}`}
        >
            {children}
        </select>
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
    Option
});

export default Select;