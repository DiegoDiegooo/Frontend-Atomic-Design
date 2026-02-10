import { Folder } from "../../domain/folder/Folder";
import { FolderRepository } from "../../domain/folder/FolderRepository";

export class CreateFolderUseCase {
  constructor(private repository: FolderRepository) {}

  execute(name: string, userId: string) {
    const folder = new Folder(name, userId);
    this.repository.save(folder);

    return folder.toJSON();
  }
}