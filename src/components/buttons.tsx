import button from "./button.module.css";

type ButtonProps = {
  icon?: React.ReactNode;
  label?: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "transparent";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};

export default function Button({
  icon,
  label,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`${button.button} ${button[variant]} ${button[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? icon : null}
      {label}
    </button>
  );
}
