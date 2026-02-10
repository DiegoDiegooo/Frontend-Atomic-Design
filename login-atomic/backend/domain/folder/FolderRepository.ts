import { Folder } from "./Folder";

export interface FolderRepository {
  save(folder: Folder): void;
  findByUserId(userId: string): Folder[];
}