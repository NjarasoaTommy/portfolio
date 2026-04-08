import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 65 },
        { name: 'JavaScript', level: 92 },
        { name: 'HTML / SCSS', level: 90 },
        { name: 'React Native(mobile)', level: 70 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Symfony', level: 80 },
        { name: 'Django', level: 70 },
        { name: 'Node.js', level: 70 },
        { name: 'REST APIs', level: 88 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 90 },
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 65 },
        { name: 'CI/CD', level: 60 },
        { name: 'Linux / Bash', level: 60 },
        { name: 'Git', level: 85 },
      ],
    },
  ];

  badges = [
    'Python', 'PHP', 'TypeScript', 'JavaScript',
    'Django', 'Symfony', 'Angular', 'React', 'Node.js',
    'Docker', 'Jenkins', 'GitHub Actions', 'GitLab', 'Kubernetes',
    'PostgreSQL', 'MySql', 'MongoDB', 'Oracle',
    'Linux', 'Git', 'REST APIs', 'HTML', 'SCSS',
  ];
}
