import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      formError: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const value = event.target.value;
    if (value.length <= 50) {
      this.setState({
        title: value,
        formError: '',
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
      formError: '',
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const title = this.state.title.trim();
    if (title.length === 0) {
      this.setState({
        formError: 'Judul tidak boleh kosong atau berisi spasi saja.',
      });
      return;
    }

    const body = this.state.body.trim();
    if (body.length < 10) {
      this.setState({
        formError: 'Isi catatan minimal harus 10 karakter.',
      });
      return;
    }

    this.props.addNote({ title, body });
    this.setState({
      title: '',
      body: '',
      formError: '',
    });
  }

  render() {
    const remainingChars = 50 - this.state.title.length;
    const charLimitClassName = `note-input__title__char-limit${
      remainingChars <= 10 ? ' note-input__title__char-limit--warn' : ''
    }`;

    const isBodyShort =
      this.state.body.length > 0 && this.state.body.length < 10;
    const errorMessage =
      this.state.formError ||
      (isBodyShort ? 'Isi catatan minimal harus 10 karakter.' : '');

    return (
      <div className="note-input" data-testid="note-input">
        <h2>Buat catatan</h2>

        {errorMessage && (
          <p
            className="note-input__feedback note-input__feedback--error"
            role="alert"
            data-testid="note-input-error"
          >
            {errorMessage}
          </p>
        )}

        <form
          onSubmit={this.onSubmitEventHandler}
          data-testid="note-input-form"
        >
          <p
            className={charLimitClassName}
            data-testid="note-input-title-remaining"
          >
            Sisa karakter: {remainingChars}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
            data-testid="note-input-title-field"
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
            data-testid="note-input-body-field"
          />
          <button type="submit" data-testid="note-input-submit-button">
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
