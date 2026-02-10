import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export function LoginForm() {
  return (
    <div>
      <Input type="text" placeholder="Usuario" />
      <Input type="password" placeholder="Contraseña" />
      <Button  text="Iniciar sesión" />
    </div>
  );
}
