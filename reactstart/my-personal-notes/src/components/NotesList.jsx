import React from 'react';
import NoteItem from './NoteItem';

const groupNotesByMonthYear = (notes) => {
  const formatter = new Intl.DateTimeFormat('id-ID', {
    month: 'long',
    year: 'numeric',
  });

  return notes.reduce((grouped, note) => {
    const key = formatter.format(new Date(note.createdAt));
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(note);
    return grouped;
  }, new Map());
};

function NotesList({
  notes,
  onDelete,
  onArchive,
  highlightKeyword,
  dataTestId = 'notes-list',
}) {
  const hasNotes = Array.isArray(notes) && notes.length > 0;

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >
          Tidak ada catatan
        </p>
      </div>
    );
  }

  const groupedNotes = Array.from(groupNotesByMonthYear(notes).entries());

  return (
    <div className="notes-list notes-list--grouped" data-testid={dataTestId}>
      {groupedNotes.map(([groupTitle, groupItems]) => (
        <section
          key={groupTitle}
          className="notes-group"
          data-testid={`${dataTestId}-group`}
        >
          <header className="notes-group__header">
            <h3 className="notes-group__title">{groupTitle}</h3>
            <span
              className="notes-group__count"
              data-testid={`${dataTestId}-group-count`}
            >
              {groupItems.length} catatan
            </span>
          </header>
          <div className="notes-group__items">
            {groupItems.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
                highlightKeyword={highlightKeyword}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default NotesList;
