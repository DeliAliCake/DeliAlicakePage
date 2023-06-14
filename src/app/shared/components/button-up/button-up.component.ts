import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'shared-button-up',
  templateUrl: './button-up.component.html',
  styleUrls: ['./button-up.component.scss'],
})
export class ButtonUpComponent {
  isVisible: boolean = false;
  constructor(private renderer: Renderer2) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 250) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  goUp() {
    const nav = document.getElementById('navbar');
    if (nav) {
      nav.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
