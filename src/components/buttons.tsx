import button from './button.module.css'

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'transparent';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
};

export default function Button({ label, onClick, variant = 'primary', size = 'medium', disabled = false }: ButtonProps) {
  return (
    <button
      className={`${button.button} ${button[variant]} ${button[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}