import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <span class="logo">YZ<span class="dot">.</span></span>
      <ul class="nav-links">
        <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
        <li><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
        <li><a routerLink="/about" routerLinkActive="active">About</a></li>
        <li><a href="mailto:yarazuhd0@gmail.com" class="cta-btn">Hire Me</a></li>
      </ul>
    </nav>

    <main>
      <router-outlet />
    </main>

    <footer class="footer">
      <p>Built with <span class="accent">Angular 19</span> · Yara Zuhd © 2025</p>
    </footer>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; min-height: 100vh; }

    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background: rgba(13, 17, 23, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(168, 85, 247, 0.2);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .logo { font-family: 'Fira Code', monospace; font-size: 1.5rem; font-weight: 700; color: #a855f7; }
    .dot { color: #fff; }
    .nav-links { display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0; align-items: center; }
    .nav-links a { color: #e2e8f0; text-decoration: none; font-size: 0.95rem; transition: color 0.2s; }
    .nav-links a:hover, .nav-links a.active { color: #a855f7; }
    .cta-btn {
      padding: 0.5rem 1.25rem;
      background: #a855f7;
      border-radius: 6px;
      color: #fff !important;
      font-weight: 600;
      transition: background 0.2s, transform 0.2s;
    }
    .cta-btn:hover { background: #9333ea; transform: translateY(-1px); }

    main { flex: 1; }

    .footer {
      text-align: center;
      padding: 1.5rem;
      color: #64748b;
      font-size: 0.875rem;
      border-top: 1px solid rgba(168, 85, 247, 0.1);
    }
    .accent { color: #a855f7; }
  `],
})
export class AppComponent {}
