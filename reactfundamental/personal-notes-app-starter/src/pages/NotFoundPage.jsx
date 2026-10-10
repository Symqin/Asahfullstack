import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <main>
            <h1>404 - Halaman Tidak Ditemukan</h1>
            <p>Halaman yang Anda cari tidak tersedia.</p>

            <Link to="/">Kembali ke halaman utama</Link>
        </main>
    );
}

export default NotFoundPage;