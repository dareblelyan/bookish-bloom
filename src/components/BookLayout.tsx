import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { manualRecommendations } from "@/lib/recommendations";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function BookLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <div className="bb flex w-full">
        <div className="flex-1 flex flex-col min-w-0">
          <header className="bb-header">
            <div className="container">
              <div className="bb-header-left">
                <SidebarTrigger className="bb-sidebar-trigger" />
                <div className="bb-site-title">
                  <Link to="/">Marginalia</Link>
                </div>
              </div>
              <nav className="bb-nav" aria-label="Primary">
                <ul>
                  <li>
                    <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "active" }}>
                      Reviews
                    </Link>
                  </li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#recommendations">Recommendations</a></li>
                </ul>
              </nav>
            </div>
          </header>

          <main className="bb-main">
            <div className="container">{children}</div>
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

        <Sidebar side="right" collapsible="offcanvas" className="bb-shadcn-sidebar">
          <SidebarContent className="bb-sidebar-content">
            <SidebarGroup>
              <SidebarGroupLabel className="bb-widget-title" id="about">About Me</SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="bb-about">
                  <div className="bb-avatar" aria-hidden />
                  <p className="bb-about-text">
                    Welcome to my book blog. I'm an avid reader sharing thoughts on
                    the books I love — quiet novels, strange fictions, and the
                    occasional biography.
                  </p>
                  <a className="bb-about-link" href="#about">Read more</a>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="bb-widget-title" id="recommendations">
                Recommendations
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="bb-rec-list">
                  {manualRecommendations.map((b) => (
                    <div key={b.title} className="bb-rec-item">
                      <div
                        className="bb-rec-cover"
                        style={{ background: b.coverGradient }}
                        aria-hidden
                      />
                      <div>
                        <p className="bb-rec-title">{b.title}</p>
                        <p className="bb-rec-author">{b.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
}
