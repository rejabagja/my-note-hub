import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({ searchKeyword, onSearchKeywordHandler }) {
  return (
    <header className="note-app__header">
      <h1>MyNoteHub</h1>
      <NoteSearch searchKeyword={searchKeyword} onSearch={onSearchKeywordHandler} />
    </header>
  );
}

export default NoteAppHeader;