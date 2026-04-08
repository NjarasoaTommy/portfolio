import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'work' | 'internship' | 'stage';
  description: string;
  highlights: string[];
  stack: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Full Stack Developer',
      company: 'Tolia MADAGASCAR',
      period: 'Nov 2025 — Feb 2026',
      location: 'Antananarivo (Namehana)',
      type: 'work',
      description:
        'Improving and maintaining an ERP application.',
      highlights: [
        'Fixed bugs',
        'Added new functionnalities',
        'Refactored code',
      ],
      stack: ['JQuery', 'Symfony', 'Twig', 'PostgreSQL'],
    },
    {
      role: 'Full stack Developer',
      company: 'Tolia MADAGASCAR',
      period: 'Aug 2024 — Nov 2024',
      location: 'Antananarivo (Namehana)',
      type: 'stage',
      description:
        'Worked as a developer by including stock transfer with multiple stocks features.',
      highlights: [
        'Maked the conception of the new way to manage the stock',
        'Integrated the transaction functionnality',
        "Implemented employee's action tracking",
      ],
      stack: ['JQuery', 'Symfony', 'Twig', 'PostgreSQL'],
    },
    {
      role: 'Full Stack Developer',
      company: 'BOA Antaninarenina',
      period: 'Jul 2023 — Oct 2023',
      location: 'Antananarivo (Antsahavola)',
      type: 'stage',
      description:
        "Joined a dynamic developer's team. Create an application for materials inventory.",
      highlights: [
        'Descoverd how MVC is used really in real project',
        'Understood the strenght and the weekness of ORM',
        'Increased the knowledge about conception best practices.',
        'Validate the importance of using a framework',
      ],
      stack: ['CodeIgniter','JavaScript','MySQL'],
    },
  ];
}
