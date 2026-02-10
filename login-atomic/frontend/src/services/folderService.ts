export interface Folder {
  id: string;
  name: string;
}

export const getFolders = async (userId: string): Promise<Folder[]> => {
  const res = await fetch(
    `http://localhost:3001/folders?userId=${userId}`
  );
  return res.json();
};

export const createFolder = async (
  name: string,
  userId: string
): Promise<Folder> => {
  const res = await fetch("http://localhost:3001/folders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, userId })
  });

  return res.json();
};
