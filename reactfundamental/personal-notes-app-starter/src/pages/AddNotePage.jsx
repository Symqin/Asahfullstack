import {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function AddNotePage() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    function onSubmitHandler(event) {
        event.preventDefault();

        const cleanTitle = title.trim();
        const cleanBody = body.trim();

        if (!cleanTitle || !cleanBody) {
            setError('Judul dan isi catatan wajib diisi');
            return;
        }

        addNote({
            title: cleanTitle,
            body: cleanBody,
        });
        
        navigate('/');
    }

    return (
        <main className="add-new-page">
            <h2>Tambah Catatan</h2>

            <form onSubmit={onSubmitHandler}>
                <div className="add-new-page__input">
                    <label htmlFor="title">Judul Catatan</label>
                    <input
                        id="title"
                        type="text"
                        className="add-new-page__input__title"
                        placeholder="Masukan judul catatan"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                            setError('');
                        }}
                    />
                </div>

                <div className="add-new-page__input">
                    <label htmlFor="body">Isi Catatan</label>
                    <textarea
                        id="body"
                        className="add-new-page__input__body"
                        placeholder="Tuliskan isi catatan..."
                        value={body}
                        onChange={(event) => {
                            setBody(event.target.value);
                            setError('');
                        }}
                        rows={8}
                    />
                </div>

                {error && (
                    <p role="alert" className="form-error">
                        {error}
                    </p>
                )}

                <div className="add-new-page__action">
                    <button type="submit">
                        Simpan Catatan
                    </button>

                    <Link to="/">Batal</Link>
                </div>
            </form>
        </main>
    ) 
}

export default AddNotePage;