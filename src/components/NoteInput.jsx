import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.maxTitleLength = 50;

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= this.maxTitleLength) {
      this.setState({ title: event.target.value });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    
    this.props.addNote({
      id: +new Date(),
      createdAt: new Date().toISOString(),
      archived: false,
      ...this.state,
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form method="post" onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit" style={this.state.title.length >= 40 ? { color: "#ff5f52"} : null}>Sisa karakter: {this.maxTitleLength - this.state.title.length}</p>
          <input type="text" className="note-input__title" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
          <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." required value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;