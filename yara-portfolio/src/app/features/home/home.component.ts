import { Component, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <p class="greeting">Hi there, I'm</p>
        <h1 class="name">Yara Zuhd<span class="cursor">_</span></h1>
        <h2 class="title">Frontend Developer</h2>
        <p class="subtitle">
          Specializing in <span class="accent">Angular 19</span>,
          <span class="accent">TypeScript</span> &amp;
          <span class="accent">RxJS</span> —
          building enterprise-grade component libraries and scalable design systems.
        </p>
        <div class="cta-group">
          <a routerLink="/projects" class="btn btn-primary">View Projects</a>
          <a routerLink="/about" class="btn btn-secondary">About Me</a>
          <a href="mailto:yarazuhd0@gmail.com" class="btn btn-outline">Hire Me</a>
        </div>
      </div>
      <div class="hero-code">
        <pre><code>{{ codeSnippet() }}</code></pre>
      </div>
    </section>

    <section class="skills-banner">
      <div class="skills-track">
        @for (skill of skills; track skill) {
          <span class="skill-chip">{{ skill }}</span>
        }
        @for (skill of skills; track skill) {
          <span class="skill-chip">{{ skill }}</span>
        }
      </div>
    </section>

    <section class="highlights">
      <div class="highlight-card">
        <span class="number">4+</span>
        <span class="label">Years Experience</span>
      </div>
      <div class="highlight-card">
        <span class="number">10+</span>
        <span class="label">Projects Delivered</span>
      </div>
      <div class="highlight-card">
        <span class="number">100k+</span>
        <span class="label">Rows in Virtual Tables</span>
      </div>
      <div class="highlight-card">
        <span class="number">3</span>
        <span class="label">Angular Versions Mastered</span>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      padding: 5rem 4rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .greeting { color: #a855f7; font-family: 'Fira Code', monospace; font-size: 1rem; margin-bottom: 0.5rem; }
    .name {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      color: #fff;
      margin: 0 0 0.5rem;
      line-height: 1.1;
    }
    .cursor { animation: blink 1s step-end infinite; color: #a855f7; }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    .title { font-size: 1.5rem; color: #94a3b8; font-weight: 400; margin-bottom: 1.5rem; }
    .subtitle { color: #94a3b8; line-height: 1.7; margin-bottom: 2rem; font-size: 1.05rem; }
    .accent { color: #a855f7; font-weight: 600; }
    .cta-group { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn {
      padding: 0.75rem 1.75rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s;
      cursor: pointer;
    }
    .btn-primary { background: #a855f7; color: #fff; }
    .btn-primary:hover { background: #9333ea; transform: translateY(-2px); box-shadow: 0 4px 20px rgba(168,85,247,0.4); }
    .btn-secondary { background: rgba(168,85,247,0.1); color: #a855f7; border: 1px solid rgba(168,85,247,0.3); }
    .btn-secondary:hover { background: rgba(168,85,247,0.2); }
    .btn-outline { background: transparent; color: #e2e8f0; border: 1px solid rgba(255,255,255,0.2); }
    .btn-outline:hover { border-color: #a855f7; color: #a855f7; }

    .hero-code {
      background: #161b22;
      border: 1px solid rgba(168,85,247,0.3);
      border-radius: 12px;
      padding: 1.5rem;
      overflow: hidden;
    }
    .hero-code pre { margin: 0; }
    .hero-code code {
      font-family: 'Fira Code', monospace;
      font-size: 0.85rem;
      color: #e2e8f0;
      white-space: pre;
    }

    .skills-banner {
      overflow: hidden;
      padding: 1.5rem 0;
      background: rgba(168,85,247,0.05);
      border-top: 1px solid rgba(168,85,247,0.1);
      border-bottom: 1px solid rgba(168,85,247,0.1);
    }
    .skills-track {
      display: flex;
      gap: 1.5rem;
      animation: scroll 30s linear infinite;
      width: max-content;
    }
    @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .skill-chip {
      padding: 0.4rem 1rem;
      background: rgba(168,85,247,0.1);
      border: 1px solid rgba(168,85,247,0.3);
      border-radius: 20px;
      color: #a855f7;
      font-size: 0.875rem;
      white-space: nowrap;
      font-family: 'Fira Code', monospace;
    }

    .highlights {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      padding: 4rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .highlight-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      background: #161b22;
      border: 1px solid rgba(168,85,247,0.2);
      border-radius: 12px;
      text-align: center;
      transition: border-color 0.2s, transform 0.2s;
    }
    .highlight-card:hover { border-color: #a855f7; transform: translateY(-4px); }
    .number { font-size: 2.5rem; font-weight: 700; color: #a855f7; font-family: 'Fira Code', monospace; }
    .label { color: #94a3b8; font-size: 0.875rem; margin-top: 0.5rem; }

    @media (max-width: 768px) {
      .hero { grid-template-columns: 1fr; padding: 3rem 1.5rem; }
      .hero-code { display: none; }
      .highlights { grid-template-columns: repeat(2, 1fr); padding: 2rem 1.5rem; }
    }
  `],
})
export class HomeComponent implements OnInit {
  skills = [
    'Angular 19', 'TypeScript', 'RxJS', 'Angular CDK', 'SCSS', 'Node.js',
    'React', 'Electron.js', 'PostgreSQL', 'Firebase', 'GraphQL', 'Figma',
  ];

  codeSnippet = signal('');

  private readonly snippet = `// Angular 19 Signal-based component
@Component({
  selector: 'app-data-table',
  standalone: true,
})
export class DataTableComponent {
  data = signal<Row[]>([]);
  total = computed(() =>
    this.data().length
  );

  constructor(private svc: DataService) {
    effect(() => {
      this.svc.stream$.pipe(
        takeUntilDestroyed()
      ).subscribe(rows =>
        this.data.set(rows)
      );
    });
  }
}`;

  ngOnInit() {
    this.codeSnippet.set(this.snippet);
  }
}
