import { useState } from "react";
import { LoginContainer } from "../components/organisms/LoginContainer";

type Props = {
  onLogin: (user: { id: string; email: string }) => void;
};

export default function Login(_props: Props) {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // simulamos login exitoso
    setSuccess(true);
  };

  return (
    <section onSubmit={handleSubmit}>
      <LoginContainer />

      {success && (
        <p style={{ color: "green", marginTop: "1rem" }}>
          ✅ Login exitoso
        </p>
      )}
    </section>
  );
}