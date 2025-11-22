import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  title = 'Práctica DOM Angular';
  items: string[] = ['Elemento 1', 'Elemento 2'];
  inputText = '';

  @ViewChild('content') contentRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    if (this.contentRef) {
      const browser = this.detectBrowser();

      this.contentRef.nativeElement.style.backgroundColor =
        browser === 'Chrome' ? 'lightblue' :
        browser === 'Firefox' ? 'lightyellow' :
        browser === 'Edge' ? 'lightcoral' : 'lightgreen';

      this.contentRef.nativeElement.textContent += ' (Modificado dinámicamente)';
    }
  }

  addItem() {
    this.items.push(`Elemento ${this.items.length + 1}`);
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputText = target.value;
  }

  detectBrowser(): string {
    const userAgent = navigator.userAgent;

    if (userAgent.includes('Edg')) {
      return 'Edge';
    } else if (userAgent.includes('Firefox')) {
      return 'Firefox';
    } else if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
      return 'Chrome';
    }
    return 'Otro';
  }
}
