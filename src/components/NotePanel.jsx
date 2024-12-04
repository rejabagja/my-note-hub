import React from "react";
import NoteItem from "./NoteItem";

function NotePanel({ notes, children, onArchive, onDelete }) {
  return (
    <>
      <h2>{children}</h2>
      {notes.length > 0 ? (
        <div className="notes-list">
          {
            notes.map(note => (<NoteItem key={note.id} note={note} onArchive={onArchive} onDelete={onDelete} />))
          }
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </>
  );
}

export default NotePanel;