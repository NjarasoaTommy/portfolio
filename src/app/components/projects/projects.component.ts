import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  featured?: boolean;
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Civil registration platform',
      description:
        'A project built to make managing civil informations more easier anywhere in Madagascar.',
      tags: ['Django', 'Angular', 'PostgreSQL'],
      github: 'https://github.com/NjarasoaTommy/etat_civil_platform',
      featured: true,
    },
    {
      title: 'Database monitoring',
      description:
        'A web application designed to track all actions done in one database. So each changes are stored and the admin can monitore it in real time.',
      tags: ['Symfony', 'Angular', 'Docker', 'Postgresql'],
      github: 'https://github.com/NjarasoaTommy/audit_db',
      featured: true,
    },
    {
      title: 'Petri Net',
      description:
        'Build an application to show the behavihor of a system using the petri net graph and concept. The system represents the problem of the man who must cross a river with his wolf, his goat, and his cabbage',
      tags: ['Angular'],
      github: 'https://github.com/NjarasoaTommy/rdp_project',
      featured: true,
    },
    {
      title: 'Pneu selling',
      description:
        'Web application developped with PHP without framework. The main goal is to manage all the process of selling.',
      tags: ['PHP', 'Mysql'],
      github: 'https://github.com/NjarasoaTommy/vente_pneu',
    },
    {
      title: 'ERP Applicationss',
      description:
        'An ERP solution to manage all activities of a commercial society. Including Stock management, approvisionning, selling, employee commissions and much more.',
      tags: ['Symfony', 'JQuery', 'Postgresql'],
      github: '#',
    },
  ];

  featuredProjects = this.projects.filter(p => p.featured);
  otherProjects = this.projects.filter(p => !p.featured);
}
