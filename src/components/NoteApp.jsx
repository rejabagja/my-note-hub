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

    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onSearchKeywordChangeEventHandler =
      this.onSearchKeywordChangeEventHandler.bind(this);
    this.onArchiveNoteEventHandler = this.onArchiveNoteEventHandler.bind(this);
    this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
  }

  onAddNoteEventHandler(newNote) {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, newNote],
      };
    });
  }

  onSearchKeywordChangeEventHandler(event) {
    this.setState({ searchKeyword: event.target.value });
  }

  onArchiveNoteEventHandler(id) {
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

  onDeleteNoteEventHandler(id) {
    const [noteTarget] = this.state.notes.filter(note => note.id === id);
    const confirmation = confirm(`Apakah anda yakin ingin menghapus note: ${noteTarget.title}?`);
    if (confirmation) {
      this.setState(prevState => {
        const newNotes = prevState.notes.filter(note => note.id !== id);
        return { notes: newNotes };
      });
    }
  }

  render() {
    return (
      <>
        <NoteAppHeader
          searchKeyword={this.state.searchKeyword}
          onSearchKeywordHandler={this.onSearchKeywordChangeEventHandler}
        />
        <NoteAppBody 
          notes={this.state.notes.filter(note => !note.archived)} 
          archivedNotes={this.state.notes.filter(note => note.archived)}
          onAddNote={this.onAddNoteEventHandler} 
          onArchiveNote={this.onArchiveNoteEventHandler}
          onDeleteNote={this.onDeleteNoteEventHandler}
        />
      </>
    );
  }
}

export default NoteApp;
