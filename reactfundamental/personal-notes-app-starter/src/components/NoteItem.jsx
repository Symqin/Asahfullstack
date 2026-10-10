import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';

function NoteItem({ id, title, createdAt, body }) {
    return (
        <article className="note-item">
            <h2 className="note-item__title">
                <Link to={`/notes/${id}`}>
                    {title}
                </Link>
            </h2>

            <p className="note-item__createdAt">
                {showFormattedDate(createdAt)}
            </p>

            <p className="note-item__body">
                {body}
            </p>
        </article>
    );
}

export default NoteItem;