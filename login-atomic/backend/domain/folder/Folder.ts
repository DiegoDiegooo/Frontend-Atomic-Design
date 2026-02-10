import crypto from "crypto";

export class Folder {
  public readonly id: string;
  public name: string;
  public userId: string;

  constructor(name: string, userId: string) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.userId = userId;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      userId: this.userId,
    };
  }
}