const API_URL = "http://localhost:3001";

export async function getFolders() {
  const response = await fetch(`${API_URL}/folders`);
  return response.json();
}

export async function createFolder(name: string) {
  const response = await fetch(`${API_URL}/folders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  return response.json();
}
