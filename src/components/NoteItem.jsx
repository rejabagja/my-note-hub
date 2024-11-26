import React from "react";
import { showFormattedDate } from "../utils";

function NoteItem({ noteItem, onArchive, onDelete }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{noteItem.title}</h3>
        <p className="note-item__date">
          {showFormattedDate(noteItem.createdAt)}
        </p>
        <p className="note-item__body">{noteItem.body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDelete(noteItem.id)}
          onMouseEnter={(event) => {
            event.target.parentElement.previousSibling.style.opacity = "0.5";
          }}
          onMouseLeave={(event) => {
            event.target.parentElement.previousSibling.style.opacity = "1";
          }}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(noteItem.id)}
        >
          {noteItem.archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
