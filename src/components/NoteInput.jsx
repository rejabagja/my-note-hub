import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      maxTitleLength: 50,
    };
  }

  onTitleChangeEventHandler = (event) => {
    const { value } = event.target;
    const { maxTitleLength } = this.state;
    if (value.length <= maxTitleLength) {
      this.setState({ title: value });
    }
  }

  onBodyChangeEventHandler = (event) => {
    this.setState({ body: event.target.value });
  }

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    
    this.props.addNote({
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      createdAt: new Date().toISOString(),
      archived: false,
    });
  }

  render() {
    const { title, maxTitleLength } = this.state;
    const reminingChars = maxTitleLength - title.length;
    
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form method="post" onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit" style={reminingChars <= 10 ? { color: "#ff5f52"} : null}>Sisa karakter: {reminingChars}</p>
          <input type="text" className="note-input__title" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
          <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." required value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;