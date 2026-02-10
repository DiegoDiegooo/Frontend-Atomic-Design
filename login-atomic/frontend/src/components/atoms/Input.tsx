import "../organisms/LoginContainer.css";
type InputProps = {
  type: string;
  placeholder: string;
};

export function Input({ type, placeholder }: InputProps) {
  return <input className="input-login" type={type} placeholder={placeholder} />;
}
