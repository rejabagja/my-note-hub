import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({ searchKeyword, onSearch }) {
  return (
    <header className="note-app__header">
      <h1>MyNoteHub</h1>
      <NoteSearch searchKeyword={searchKeyword} onSearch={onSearch} />
    </header>
  );
}

export default NoteAppHeader;