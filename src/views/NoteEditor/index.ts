import { setTitle } from '../../router';
import { NoteModel } from '../../models';
import pbw from '../../services/pocketbase';
import { asyncComputed } from '../../utils/vue';

export function query(noteId: string) {
  return asyncComputed(async () => {
    const rawNote = await pbw.getOneRecord("notes", noteId);
    if (!rawNote) return null;

    setTitle(rawNote.title);
    const note = NoteModel.from(rawNote);

    return { note };
  });
}
