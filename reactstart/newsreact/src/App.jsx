function Button({ link }) {
  return (
    <a href={link}>
      Read More
    </a>
  );
}

function CardHeader({ image, category }) {
  return (
    <div>
      <img src={image} alt={category} />
    </div>
  );
}

function CardBody({ title, date, content, category, link }) {
  return (
    <div>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

function Card({ news }) {
  return (
    <article>
      <CardHeader
        image={news.image}
        category={news.category}
      />

      <CardBody
        title={news.title}
        date={news.date}
        content={news.content}
        category={news.category}
        link={news.link}
      />
    </article>
  );
}

function Header() {
  return (
    <header>
      <h1>News</h1>
    </header>
  );
}

function News() {
  // data news
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://picsum.photos/600/400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://picsum.photos/600/400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://picsum.photos/600/400',
      category: 'Travel',
      link: '#'
    }
  ];

  return (
    <div>
      <Header />

      {someNews.map((news, index) => (
        <Card
          key={index}
          news={news}
        />
      ))}
    </div>
  );
}

export default News;
