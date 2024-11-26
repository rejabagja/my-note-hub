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

// class NoteSearch extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { keyword: '' };

//     this.onKeywordChangeEventHandler = this.onKeywordChangeEventHandler.bind(this);
//     this.onSearchInputEventHandler = this.onSearchInputEventHandler.bind(this);
//   }

//   onKeywordChangeEventHandler(event) {
//     this.setState({ keyword: event.target.value });
//   }

//   onSearchInputEventHandler(event) {
//     this.props.onSearch(event.target.value);
//   }

//   render() {
//     return (
//       <div className="note-search">
//         <input
//           type="text"
//           placeholder="Cari catatan ..."
//           value={this.state.keyword}
//           onChange={this.onKeywordChangeEventHandler}
//           onInput={this.onSearchInputEventHandler}
//         />
//       </div>
//     );
//   }
// }

export default NoteSearch;