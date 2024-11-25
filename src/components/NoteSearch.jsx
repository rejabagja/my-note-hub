import React from "react";

function NoteSearch({ searchKeyword, onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan ..."
        value={searchKeyword}
        onChange={onSearch}
      />
    </div>
  );
}

export default NoteSearch;