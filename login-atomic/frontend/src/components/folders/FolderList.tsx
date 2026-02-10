import { useEffect, useState } from "react";
import type { Folder } from "../../services/folderService";
import { getFolders, createFolder } from "../../services/folderService";

export function FolderList({ userId }: { userId: string }) {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    getFolders(userId).then(setFolders);
  }, [userId]);

  const handleCreate = async () => {
    const newFolder = await createFolder("Nueva carpeta", userId);
    setFolders([...folders, newFolder]);
  };

  return (
    <section>
      <h2>Carpetas</h2>

      {folders.length === 0 && <p>No tienes carpetas</p>}

      <ul>
        {folders.map(folder => (
          <li key={folder.id}>{folder.name}</li>
        ))}
      </ul>

      <button onClick={handleCreate}>Crear carpeta</button>
    </section>
  );
}