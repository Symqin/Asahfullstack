import NoteItem from './NoteItem';

function NoteList({ notes }) {
    if (notes.length === 0) {
        return (
            <div className="notes-list-empty">
                <p>Tidak ada catatan</p>
            </div>
        );
    }

    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    createdAt={note.createdAt}
                    body={note.body}
                />
            ))}
        </div>
    );
}

export default NoteList;