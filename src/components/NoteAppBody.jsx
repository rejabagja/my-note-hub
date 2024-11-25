import React from "react";
import NoteInput from "./NoteInput";

function NoteAppBody({ notes, archivedNotes, onAddNote, onArchiveNote, onDeleteNote }) {
  return (
    <main className="note-app__body">
      <NoteInput addNote={onAddNote} />
    </main>
  );
}

export default NoteAppBody;