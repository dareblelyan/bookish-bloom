import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { recommendations } from "@/lib/books";

export function BookLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bb">
      <header className="bb-header">
        <div className="container">
          <div className="bb-site-title">
            <Link to="/">Marginalia</Link>
          </div>
          <nav className="bb-nav" aria-label="Primary">
            <ul>
              <li><Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "active" }}>Reviews</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="#recommendations">Recommendations</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="bb-main">
        <div className="container">
          <div className="bb-content-area">
            <div>{children}</div>
            <BookSidebar />
          </div>
        </div>
      </main>

      <footer className="bb-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Marginalia. All rights reserved.</p>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#rss">RSS</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

function BookSidebar() {
  return (
    <aside className="bb-sidebar">
      <div className="bb-widget" id="about">
        <h3 className="bb-widget-title">About Me</h3>
        <div className="bb-about">
          <div className="bb-avatar" aria-hidden />
          <p className="bb-about-text">
            Welcome to my book blog. I'm an avid reader sharing thoughts on the
            books I love — quiet novels, strange fictions, and the occasional
            biography.
          </p>
          <a className="bb-about-link" href="#about">Read more</a>
        </div>
      </div>

      <div className="bb-widget" id="recommendations">
        <h3 className="bb-widget-title">Recommendations</h3>
        <div className="bb-rec-list">
          {recommendations.map((b) => (
            <Link
              key={b.slug}
              to="/books/$slug"
              params={{ slug: b.slug }}
              className="bb-rec-item"
            >
              <div
                className="bb-rec-cover"
                style={{ background: b.coverGradient }}
                aria-hidden
              />
              <div>
                <p className="bb-rec-title">{b.title}</p>
                <p className="bb-rec-author">{b.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
