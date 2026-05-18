import { Component, AfterViewInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})

export class HeroComponent implements AfterViewInit, OnDestroy {
  private animationTimeout: any;

  scrollTo(e: Event, target: string) {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    // Stop animation after 4 secondes
    this.animationTimeout = setTimeout(() => {
      const typingElement = document.querySelector('.typing-animation');
      if (typingElement) {
        typingElement.classList.add('completed');
      }
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;

    // Generate an avatar with initials as fallback
    const name = 'Njarasoa Tommy';

    // Free avatar service URL
    img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=6366f1&color=fff&bold=true&format=svg`;
    console.warn('Profil image not found, usage of a default avatar');
  }
}
