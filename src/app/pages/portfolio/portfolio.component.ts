import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  readonly portfolio = PORTFOLIO;
  readonly navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Experience', target: 'experience' },
    { label: 'Education', target: 'education' },
    { label: 'Credentials', target: 'credentials' },
    { label: 'Contact', target: 'contact' }
  ];

  activeTab: 'all' | 'work' | 'personal' = 'all';
  menuOpen = false;
  currentYear = new Date().getFullYear();

  get filteredProjects() {
    if (this.activeTab === 'all') {
      return this.portfolio.projects;
    }
    return this.portfolio.projects.filter(p => p.type === this.activeTab);
  }

  scrollTo(sectionId: string): void {
    this.menuOpen = false;
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
