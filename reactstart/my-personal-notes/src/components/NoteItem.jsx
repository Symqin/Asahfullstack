import React from 'react';
import { showFormattedDate } from '../utils';
import NoteActionButton from './NoteActionButton';

const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function highlightText(text, keyword) {
  if (!keyword) {
    return text;
  }

  const escapedKeyword = escapeRegExp(keyword);
  const regex = new RegExp(`(${escapedKeyword})`, 'gi');
  const lowerKeyword = keyword.toLowerCase();

  return text.split(regex).map((part, index) =>
    part.toLowerCase() === lowerKeyword ? (
      <mark key={`${part}-${index}`}>{part}</mark>
    ) : (
      part
    )
  );
}

function NoteItem({ note, onDelete, onArchive, highlightKeyword }) {
  const title = highlightText(note.title, highlightKeyword);
  const body = highlightText(note.body, highlightKeyword);

  return (
    <div
      className="note-item"
      data-testid="note-item"
      data-note-id={note.id}
    >
      <div className="note-item__content" data-testid="note-item-content">
        <h3 className="note-item__title" data-testid="note-item-title">
          {title}
        </h3>
        <p className="note-item__date" data-testid="note-item-date">
          {showFormattedDate(note.createdAt)}
        </p>
        <p className="note-item__body" data-testid="note-item-body">
          {body}
        </p>
      </div>
      <div className="note-item__action" data-testid="note-item-action">
        <NoteActionButton
          variant="delete"
          onClick={() => onDelete(note.id)}
          data-testid="note-item-delete-button"
        >
          Delete
        </NoteActionButton>
        <NoteActionButton
          variant="archive"
          onClick={() => onArchive(note.id)}
          data-testid="note-item-archive-button"
        >
          {note.archived ? 'Pindahkan' : 'Arsipkan'}
        </NoteActionButton>
      </div>
    </div>
  );
}

export { highlightText };
export default NoteItem;
