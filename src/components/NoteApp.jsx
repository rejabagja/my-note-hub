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

  render() {
    return (
      <>
        <NoteAppHeader
          searchKeyword={this.state.searchKeyword}
          onSearchKeywordHandler={this.onSearchKeywordChangeEventHandler}
        />
        <NoteAppBody onAddNote={this.onAddNoteEventHandler} />
      </>
    );
  }
}

export default NoteApp;
