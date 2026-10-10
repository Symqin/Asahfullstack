import { Link } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getArchivedNotes } from '../utils/local-data';

function ArchivePage() {
    const notes = getArchivedNotes();

    return (
        <main className="homepage">
            <h2>Arsip Catatan</h2>

            {notes.length === 0 ? (
                <p>Arsip Kosong</p>
            ) : (
                <NoteList notes={notes} />
            )}

            <div className="homepage__action">
                <Link to="/">Kembali ke daftar catatan</Link>
            </div>
        </main>
    );
}

export default ArchivePage;