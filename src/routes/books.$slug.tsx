import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BookLayout } from "@/components/BookLayout";
import { books } from "@/lib/books";

export const Route = createFileRoute("/books/$slug")({
  loader: ({ params }) => {
    const book = books.find((b) => b.slug === params.slug);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.book.title} — Marginalia` },
          { name: "description", content: loaderData.book.excerpt },
          { property: "og:title", content: `${loaderData.book.title} — Marginalia` },
          { property: "og:description", content: loaderData.book.excerpt },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <BookLayout>
      <div className="bb-single">
        <h1 className="bb-title">Book not found</h1>
        <p className="bb-post-content" style={{ textAlign: "center" }}>
          <Link to="/" className="bb-read-more">Back to reviews</Link>
        </p>
      </div>
    </BookLayout>
  ),
  errorComponent: ({ error, reset }) => (
    <BookLayout>
      <div className="bb-single">
        <h1 className="bb-title">Something went wrong</h1>
        <p style={{ textAlign: "center" }}>{error.message}</p>
        <p style={{ textAlign: "center" }}>
          <button className="bb-read-more" onClick={reset}>Try again</button>
        </p>
      </div>
    </BookLayout>
  ),
  component: BookPage,
});

function BookPage() {
  const { book } = Route.useLoaderData();
  return (
    <BookLayout>
      <article className="bb-single">
        <Link to="/" className="bb-back">&laquo; All reviews</Link>
        <div
          className="bb-single-cover"
          style={{ background: book.coverGradient, color: book.coverAccent }}
        >
          <span>{book.title}</span>
        </div>
        <h1 className="bb-title">{book.title}</h1>
        <p className="bb-author">{book.author}</p>
        <div className="bb-post-content">
          {book.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="bb-post-meta">
          Posted on {book.date} in {book.category}
        </div>
      </article>
    </BookLayout>
  );
}
