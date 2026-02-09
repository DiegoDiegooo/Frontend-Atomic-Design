import { LoginForm } from "../molecules/LoginForm";
import "./LoginContainer.css";

export function LoginContainer() {
  return (
    <section className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <LoginForm />
      </div>
    </section>
  );
}
