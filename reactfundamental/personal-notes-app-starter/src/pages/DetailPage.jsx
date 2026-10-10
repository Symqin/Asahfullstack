import { Link, useNavigate, useParams } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const note = getNote(id);

    function onDeleteHandler() {
        deleteNote(id);
        navigate('/');
    }

    function onArchiveHandler() {
        if (note.archived) {
            unarchiveNote(id);
        } else {
            archiveNote(id);
        }

        navigate(note.archived ? '/' : '/archives');
    }

    if (!note) {
        return (
            <main className="detail-page">
                <h2>Catatan tidak ditemukan</h2>
                <Link to="/">Kembali ke daftar catatan</Link>
            </main>
        );
    }

    return (
        <main className="detail-page">
            <h2 className="detail-page__title">
                {note.title}
            </h2>

            <p className="detail-page__createdAt">
                {showFormattedDate(note.createdAt)}
            </p>
            
            <div className="detail-page__body">
                {note.body}
            </div>

            <div className="detail-page__action">
                <button type="button" onClick={onArchiveHandler}>
                    {note.archived ? 'Batal Arsip' : 'Arsipkan'}
                </button>
                <button type="button" onClick={onDeleteHandler}>Hapus</button>
                <Link to={note.archived ? '/archives' : '/'}>Kembali</Link>
            </div>
            </main>
        );
}

export default DetailPage;