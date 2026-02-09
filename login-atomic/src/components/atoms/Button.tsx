import "../organisms/LoginContainer.css";
type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return <button className="button-login">{text}</button>;
}
