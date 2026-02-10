import { FolderRepository } from "../../domain/folder/FolderRepository";

export class GetFoldersUseCase {
  constructor(private repository: FolderRepository) {}

  execute(userId: string) {
    return this.repository.findByUserId(userId).map(folder => folder.toJSON());
  }
}