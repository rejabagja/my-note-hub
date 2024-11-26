import React from "react";
import NoteInput from "./NoteInput";
import NotePanel from "./NotePanel";

function NoteAppBody({ notes, archivedNotes, onAddNote, onArchiveNote, onDeleteNote }) {
  return (
    <main className="note-app__body">
      <NoteInput addNote={onAddNote} />
      <NotePanel notes={notes} onArchive={onArchiveNote} onDelete={onDeleteNote}>Catatan Aktif</NotePanel>
      <NotePanel notes={archivedNotes} onArchive={onArchiveNote} onDelete={onDeleteNote}>Arsip</NotePanel>
    </main>
  );
}

export default NoteAppBody;