import { useState } from "react";
import { LoginForm } from "../molecules/LoginForm";
import "./LoginContainer.css";

export function LoginContainer() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section className="login-container">
      <div className="login-box">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <LoginForm />
        </form>

        {success && <p style={{ color: "green" }}>Login exitoso</p>}
      </div>
    </section>
  );
}