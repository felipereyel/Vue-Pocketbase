import { BaseModel } from "./base";
import type { insertArgs, selectArgs } from "./types";

export type NoteDTO = selectArgs<"notes">;
export type NoteCreateDTO = insertArgs<"notes">;

export class NoteModel extends BaseModel<"notes"> {
  private constructor(dto: NoteDTO) {
    super("notes", dto.id, dto);
  }

  static async create(object: NoteCreateDTO): Promise<NoteModel> {
    const dto = await super.insert("notes", object);
    return NoteModel.from(dto);
  }

  static from(dto: NoteDTO): NoteModel {
    return new NoteModel(dto);
  }

  get content() {
    return this.dto.content;
  }

  set content(content) {
    this.update({ content });
  }

  get title() {
    return this.dto.title;
  }

  set title(title) {
    this.update({ title });
  }

  get createdAt() {
    return new Date(this.dto.created);
  }

  get updatedAt() {
    return new Date(this.dto.updated);
  }
}
