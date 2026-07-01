import { createFileRoute, Link } from "@tanstack/react-router";
import { BookLayout } from "@/components/BookLayout";
import { books } from "@/lib/books";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marginalia — A Book Blog" },
      { name: "description", content: "Thoughtful reviews of literary fiction, speculative novels, and the occasional biography." },
      { property: "og:title", content: "Marginalia — A Book Blog" },
      { property: "og:description", content: "Thoughtful reviews of literary fiction, speculative novels, and the occasional biography." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <BookLayout>
      <div className="bb-posts-grid">
        {books.map((book) => (
          <article key={book.slug} className="bb-card">
            <div className="bb-card-inner">
              <Link
                to="/books/$slug"
                params={{ slug: book.slug }}
                className="bb-cover-archive"
                style={{ background: book.coverGradient, color: book.coverAccent }}
                aria-label={book.title}
              >
                <span>{book.title}</span>
              </Link>
              <div className="bb-info">
                <h2 className="bb-title">
                  <Link to="/books/$slug" params={{ slug: book.slug }}>
                    {book.title}
                  </Link>
                </h2>
                <p className="bb-author">{book.author}</p>
                <p className="bb-excerpt">{book.excerpt}</p>
                <Link to="/books/$slug" params={{ slug: book.slug }} className="bb-read-more">
                  Read More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </BookLayout>
  );
}
