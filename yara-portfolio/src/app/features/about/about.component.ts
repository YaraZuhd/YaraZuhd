import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about-page">
      <div class="about-content">
        <div class="about-text">
          <h1>About Me<span class="accent">.</span></h1>
          <p>
            I'm a <strong>Frontend Developer</strong> based in Palestine, specializing in Angular,
            TypeScript, and RxJS. I currently work at <strong>Peaxy</strong>, where I own and build
            the custom Angular component library that powers the entire product.
          </p>
          <p>
            I care deeply about <strong>performance</strong>, <strong>accessibility</strong>,
            and <strong>developer experience</strong>. My work focuses on building systems that
            scale — tables that render 100k+ rows without breaking a sweat, design systems that
            teams can build on, and patterns that make complex state management feel simple.
          </p>
          <p>
            I'm open to remote opportunities worldwide. If you're building something ambitious
            and need a frontend engineer who takes quality seriously — let's talk.
          </p>

          <div class="contact-links">
            <a href="mailto:yarazuhd0@gmail.com" class="contact-btn primary">
              ✉ yarazuhd0&#64;gmail.com
            </a>
            <a href="https://www.linkedin.com/in/yara-zuhd-2652a0209/" target="_blank" class="contact-btn">
              LinkedIn
            </a>
            <a href="https://github.com/YaraZuhd" target="_blank" class="contact-btn">
              GitHub
            </a>
          </div>
        </div>

        <div class="skills-section">
          <h2>Skills</h2>
          @for (group of skillGroups; track group.label) {
            <div class="skill-group">
              <h4>{{ group.label }}</h4>
              <div class="skill-list">
                @for (skill of group.skills; track skill) {
                  <span class="skill-item">{{ skill }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-page { max-width: 1000px; margin: 0 auto; padding: 4rem 2rem; }
    .about-content { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: start; }
    .about-text h1 { font-size: 3rem; color: #fff; margin-bottom: 1.5rem; }
    .accent { color: #a855f7; }
    .about-text p { color: #94a3b8; line-height: 1.8; margin-bottom: 1.25rem; font-size: 1rem; }
    .about-text strong { color: #e2e8f0; }

    .contact-links { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem; }
    .contact-btn {
      padding: 0.6rem 1.25rem;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.15);
      color: #e2e8f0;
      transition: all 0.2s;
    }
    .contact-btn:hover { border-color: #a855f7; color: #a855f7; }
    .contact-btn.primary { background: #a855f7; color: #fff; border-color: #a855f7; }
    .contact-btn.primary:hover { background: #9333ea; }

    .skills-section h2 { font-size: 1.5rem; color: #fff; margin-bottom: 1.5rem; }
    .skill-group { margin-bottom: 1.5rem; }
    .skill-group h4 { color: #a855f7; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem; font-family: 'Fira Code', monospace; }
    .skill-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .skill-item {
      padding: 0.3rem 0.75rem;
      background: #161b22;
      border: 1px solid rgba(168,85,247,0.2);
      border-radius: 6px;
      color: #e2e8f0;
      font-size: 0.85rem;
    }

    @media (max-width: 768px) {
      .about-content { grid-template-columns: 1fr; }
      .about-text h1 { font-size: 2rem; }
    }
  `],
})
export class AboutComponent {
  skillGroups = [
    {
      label: 'Frontend',
      skills: ['Angular 19', 'TypeScript', 'RxJS', 'Angular CDK', 'SCSS', 'HTML5', 'JavaScript'],
    },
    {
      label: 'UI Libraries',
      skills: ['PrimeNG', 'Angular Material', 'Handsontable', 'Highcharts', 'Bootstrap'],
    },
    {
      label: 'Full Stack',
      skills: ['Node.js', 'Electron.js', 'React', 'PostgreSQL', 'Firebase', 'GraphQL', 'REST APIs'],
    },
    {
      label: 'Tools',
      skills: ['Git', 'Figma', 'Postman', 'Linux'],
    },
  ];
}
