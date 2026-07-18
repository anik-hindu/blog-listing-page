import "./BlogCard.css";

function BlogCard({ author, publishedAt, title, category, image, excerpt }) {
  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  }

  return (
    <article className="blog-card">
      <div className="blog-card__image--wrapper">
        <img src={image.src} alt={image.alt} className="blog-card__image" />
      </div>
      <div className="blog-card__content">
        <span className="blog-card__category">{category}</span>
        <h2 className="blog-card__title">{title}</h2>
        <section className="blog-card__meta">
          <div className="blog-card__author">
            <img
              src={author.avatar.src}
              alt={author.avatar.alt}
              className="blog-card__avatar"
            />
            <div className="blog-card__author-details">
              <p className="blog-card__author-name"> {author.name}</p>
            </div>
          </div>
          <div className="divider"></div>
          <time className="blog-card__date" dateTime={publishedAt}>
            <img src="/icons/calendar.svg" alt="" aria-hidden="true" />
            {formatDate(publishedAt)}
          </time>
        </section>
        <p className="blog-card__excerpt">{excerpt}</p>
        <a href="#" className="blog-card__link">
          <span>Read More</span>
          <img src="/icons/arrow-right.svg" alt="" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default BlogCard;
