import { Component } from '@angular/core';
import { PROJECTS } from '../../core/projects.data';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="projects-page">
      <div class="page-header">
        <h1>Projects<span class="accent">.</span></h1>
        <p>Things I've built — from enterprise component libraries to full-stack apps.</p>
      </div>

      <div class="projects-grid">
        @for (project of projects; track project.title) {
          <div class="project-card" [class.featured]="project.featured">
            @if (project.featured) {
              <span class="featured-badge">Featured</span>
            }
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>

            <ul class="highlights">
              @for (h of project.highlights; track h) {
                <li>{{ h }}</li>
              }
            </ul>

            <div class="tech-stack">
              @for (t of project.tech; track t) {
                <span class="tech-badge">{{ t }}</span>
              }
            </div>

            <div class="project-links">
              @if (project.githubUrl) {
                <a [href]="project.githubUrl" target="_blank" class="link-btn">GitHub</a>
              }
              @if (project.liveUrl) {
                <a [href]="project.liveUrl" target="_blank" class="link-btn live">Live Demo</a>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .projects-page { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
    .page-header { margin-bottom: 3rem; }
    .page-header h1 { font-size: 3rem; color: #fff; margin-bottom: 0.5rem; }
    .accent { color: #a855f7; }
    .page-header p { color: #94a3b8; font-size: 1.1rem; }

    .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 1.5rem; }

    .project-card {
      background: #161b22;
      border: 1px solid rgba(168,85,247,0.15);
      border-radius: 12px;
      padding: 1.75rem;
      position: relative;
      transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    }
    .project-card:hover {
      border-color: #a855f7;
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(168,85,247,0.15);
    }
    .project-card.featured { border-color: rgba(168,85,247,0.4); }
    .featured-badge {
      position: absolute;
      top: 1rem; right: 1rem;
      background: rgba(168,85,247,0.2);
      color: #a855f7;
      padding: 0.2rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      border: 1px solid rgba(168,85,247,0.3);
    }
    .project-title { color: #e2e8f0; font-size: 1.2rem; margin-bottom: 0.75rem; padding-right: 5rem; }
    .project-desc { color: #94a3b8; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem; }
    .highlights { color: #64748b; font-size: 0.85rem; padding-left: 1.25rem; margin-bottom: 1rem; line-height: 1.8; }
    .highlights li::marker { color: #a855f7; }
    .tech-stack { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
    .tech-badge {
      padding: 0.25rem 0.75rem;
      background: rgba(168,85,247,0.1);
      border: 1px solid rgba(168,85,247,0.2);
      border-radius: 20px;
      color: #a855f7;
      font-size: 0.75rem;
      font-family: 'Fira Code', monospace;
    }
    .project-links { display: flex; gap: 0.75rem; }
    .link-btn {
      padding: 0.4rem 1rem;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      text-decoration: none;
      background: rgba(255,255,255,0.05);
      color: #e2e8f0;
      border: 1px solid rgba(255,255,255,0.1);
      transition: all 0.2s;
    }
    .link-btn:hover { border-color: #a855f7; color: #a855f7; }
    .link-btn.live { background: rgba(168,85,247,0.1); color: #a855f7; border-color: rgba(168,85,247,0.3); }

    @media (max-width: 600px) { .projects-grid { grid-template-columns: 1fr; } }
  `],
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}
