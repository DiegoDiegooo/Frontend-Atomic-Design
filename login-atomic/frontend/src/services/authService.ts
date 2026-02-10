export type User = {
  id: string;
  email: string;
};

export async function login(
  email: string,
  password: string
): Promise<User> {
  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();

  return {
    id: data.user.id,
    email: data.user.email,
  };
}