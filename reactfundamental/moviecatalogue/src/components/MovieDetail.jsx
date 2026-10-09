import Joi from 'joi';
import { validateProps } from '../utils/validateProps';

const movieSchema = Joi.object({
 title: Joi.string().required(),
 overview: Joi.string().required(),
 posterPath: Joi.string().required(),
 releaseDate: Joi.string().required(),
});

function MovieDetail({ title, overview, posterPath, releaseDate }) {
    
    const props = { title, overview, posterPath, releaseDate };

    validateProps(movieSchema, props, 'MovieDetail');
    
    return (
        <div>
            <img src={posterPath} alt={title} />
            <h1>{title}</h1>
            <p>Release Date: {releaseDate}</p>
            <p>{overview}</p>
        </div>
    );
}

export default MovieDetail;