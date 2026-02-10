import { FolderRepository } from "../../domain/folder/FolderRepository";
import { Folder } from "../../domain/folder/Folder";

export class InMemoryFolderRepository implements FolderRepository {
  private folders: Folder[] = [];

  save(folder: Folder): void {
    this.folders.push(folder);
  }

  findByUserId(userId: string): Folder[] {
    return this.folders.filter(folder => folder.userId === userId);
  }
}