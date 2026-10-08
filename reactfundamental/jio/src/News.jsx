import React from 'react';
import Joi from 'joi';

// TODO: lakukan validasi properti dengan menggunakan Joi
function News(props) {
  const { title, description, image, isFeatured, tags, bookmark, style } = props;
  return (
    <article style={style}>
      <img src={image} alt={title} />
      {isFeatured && (
        <p>
          <strong>Hot News!</strong>
        </p>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <br />
      <p>{tags.map((tag) => `#${tag} `)}</p>
      <button onClick={bookmark}>Bookmark</button>
    </article>
  );
}

const newsSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().uri().required(),
  isFeatured: Joi.boolean(),
  tags: Joi.array().items(Joi.string()),
  bookmark: Joi.func(),
  style: Joi.object()
});

export default News;

