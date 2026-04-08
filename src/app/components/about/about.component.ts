import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent {
  stats = [
    { value: '1+', label: 'Years of experience' },
    { value: '7+', label: 'Projects shipped' },
    { value: '5', label: 'Technologies mastered' },
    { value: '100%', label: 'Remote-ready' },
  ];
}
