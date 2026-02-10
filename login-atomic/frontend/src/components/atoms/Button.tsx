type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return (
    <button type="submit" className="button-login">
      {text}
    </button>
  );
}