import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    CrisisListComponent,
    HeroesListComponent,
    RouterLinkActive,
    RouterLink,
  ],
})
export class AppComponent {
  title = 'angular-router-sample';
}
