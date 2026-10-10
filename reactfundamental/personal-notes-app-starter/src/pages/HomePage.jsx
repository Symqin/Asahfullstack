
import { Link, useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/local-data';
import NoteList from '../components/NoteList';

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const notes = getActiveNotes();
    const keyword = searchParams.get('keyword') ?? '';

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(keyword.trim().toLowerCase()));

    function onKeywordChangeHandler(event) {
        const value = event.target.value;
        
        if (value) {
            setSearchParams({ keyword: value });
        } else {
            setSearchParams({});
        }
    }

    return (
        <main className="homepage">
            <h2>Catatan Aktif</h2>

            <nav>
                <Link to="/notes/new">Tambah Catatan</Link>
                {' | '}
                <Link to="/archives">Lihat Arsip</Link>
            </nav>

            <div className="search-bar">
                <input 
                    type="search"
                    placeholder="Cari berdasarkan judul..."
                    aria-label="Cari catatan berdasarkan judul"
                    value={keyword}
                    onChange={onKeywordChangeHandler}
                />
            </div>

            <NoteList notes={filteredNotes} />
        </main>
  );
}

export default HomePage;
