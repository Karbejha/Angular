import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
`
  ,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, HousingLocationComponent,RouterModule],
})
export class AppComponent {
  title = 'Karbejha';
}
