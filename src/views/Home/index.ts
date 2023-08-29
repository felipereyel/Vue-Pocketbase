import { setTitle } from '../../router';
import { NoteModel } from '../../models';
import pbw from '../../services/pocketbase';
import { asyncComputed } from '../../utils/vue';


export function query() {
  return asyncComputed(async () => {
    setTitle('Notes');
    const rawNotes = await pbw.getFullRecordList('notes');

    const notes = rawNotes.map(NoteModel.from);
    return { notes };
  });
}
