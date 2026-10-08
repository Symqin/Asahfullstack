import React from 'react';

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onClearHandler = this.onClearHandler.bind(this);
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
  }

  onKeywordChangeHandler(event) {
    const keyword = event.target.value;
    this.setState({ keyword });
    this.props.onSearch(keyword);
  }

  onClearHandler() {
    this.setState({ keyword: '' });
    this.props.onSearch('');
  }

  onKeyDownHandler(event) {
    if (event.key === 'Escape' && this.state.keyword) {
      this.onClearHandler();
    }
  }

  render() {
    const hasKeyword = this.state.keyword.length > 0;

    return (
      <div className="note-search" data-testid="note-search">
        <input
          type="text"
          placeholder="Cari berdasarkan judul ..."
          value={this.state.keyword}
          onChange={this.onKeywordChangeHandler}
          onKeyDown={this.onKeyDownHandler}
          aria-label="Cari catatan berdasarkan judul"
          data-testid="note-search-input"
        />
        {hasKeyword && (
          <button
            type="button"
            className="note-search__clear"
            onClick={this.onClearHandler}
            aria-label="Bersihkan pencarian"
            data-testid="note-search-clear-button"
          >
            ×
          </button>
        )}
      </div>
    );
  }
}

export default NoteSearch;
