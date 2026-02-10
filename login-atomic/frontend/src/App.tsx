import { useState } from "react";
import Login from "./pages/Login";
import { FolderList } from "./components/folders/FolderList";
import type { User } from "./services/authService";

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <FolderList userId={user.id} />
      )}
    </>
  );
}

export default App;