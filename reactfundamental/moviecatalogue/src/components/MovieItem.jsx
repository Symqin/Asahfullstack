import Joi from 'joi';
import { Link } from 'react-router-dom';
import {validateProps} from '../utils/validateProps';

const movieItemSchema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required(),
    backdropPath: Joi.string().required(),
    overview: Joi.string().required(),
});

function MovieItem({ id, title, backdropPath, overview}) {
    const props = { id, title, backdropPath, overview };

    validateProps(movieItemSchema, props, 'MovieItem');

    return (
        <article>
            <img src={backdropPath} alt={title} />
            <h2><Link to={`/movies/${id}`}>{title}</Link></h2>
            <p>{overview}</p>
        </article>
    );
}

export default MovieItem;