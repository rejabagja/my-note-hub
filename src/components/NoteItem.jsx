import React from "react";
import { showFormattedDate } from "../utils";

function NoteItem({ note, onArchive, onDelete }) {
  const deleteAnimation = (event) => {
    const { type } = event;
    if (type === 'mouseenter') {
      event.target.parentElement.previousSibling.style.opacity = "0.5";
    } else if (type === 'mouseleave') {
      event.target.parentElement.previousSibling.style.opacity = "1";
    }
  }

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{note.title}</h3>
        <p className="note-item__date">
          {showFormattedDate(note.createdAt)}
        </p>
        <p className="note-item__body">{note.body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDelete(note.id)}
          onMouseEnter={deleteAnimation}
          onMouseLeave={deleteAnimation}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(note.id)}
        >
          {note.archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
