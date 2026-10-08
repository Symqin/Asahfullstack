import React from 'react';

function NoteActionButton({ variant, children, ...props }) {
  const className =
    variant === 'delete'
      ? 'note-item__delete-button'
      : 'note-item__archive-button';

  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  );
}

export default NoteActionButton;
