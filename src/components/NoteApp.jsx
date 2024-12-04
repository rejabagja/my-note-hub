import React from "react";
import { getInitialData } from "../utils";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };
  }

  onAddNoteEventHandler = (note) => {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, note],
      };
    });
  }

  onArchiveNoteEventHandler = (id) => {
    this.setState(prevState => {
      const index = prevState.notes.findIndex(note => note.id === id);
      // console.log(index);
      if (index !== -1) {
        const prevNotes = [...prevState.notes];
        prevNotes[index].archived = !prevNotes[index].archived;
        return {
          notes: [...prevNotes]
        }
      }
    });
  }

  onDeleteNoteEventHandler = (id) => {
    const [noteTarget] = this.state.notes.filter(note => note.id === id);
    const confirmation = confirm(`Apakah anda yakin ingin menghapus Catatan: ${noteTarget.title}?`);
    if (confirmation) {
      this.setState(prevState => {
        const newNotes = prevState.notes.filter(note => note.id !== id);
        return { notes: newNotes };
      });
    }
  }

  onSearchKeywordChangeEventHandler = (event) => {
    this.setState({ searchKeyword: event.target.value });
  }

  searchNotesByKeyword(keyword) {
    return this.state.notes.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()));
  }

  filterNotesByArchiveStatus(archived = false) {
    const filteredNotesByKeyword = this.searchNotesByKeyword(this.state.searchKeyword);
    if (archived) {
      return filteredNotesByKeyword.filter(note => note.archived);
    }
    return filteredNotesByKeyword.filter(note => !note.archived);
  }

  render() {
    return (
      <>
        <NoteAppHeader
          searchKeyword={this.state.searchKeyword}
          onSearch={this.onSearchKeywordChangeEventHandler}
        />
        <NoteAppBody 
          notes={this.filterNotesByArchiveStatus()} 
          archivedNotes={this.filterNotesByArchiveStatus(true)}
          onAddNote={this.onAddNoteEventHandler} 
          onArchiveNote={this.onArchiveNoteEventHandler}
          onDeleteNote={this.onDeleteNoteEventHandler}
        />
      </>
    );
  }
}

export default NoteApp;
