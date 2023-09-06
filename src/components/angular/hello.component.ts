import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hello',
    standalone: true,
    imports: [NgIf, CommonModule],
    template: `
    <p>Hello from Angular!!</p>
    <p *ngIf="show">{{ helpText }}</p>

    <button [ngClass]="buttonStyle" (click)="toggle()">Toggle</button>
  `,
})
export class HelloComponent {

    @Input() helpText = 'in Angular 16 Standalone';
    @Input() buttonStyle = ''



    show = false;

    toggle() {
        this.show = !this.show;
    }
}