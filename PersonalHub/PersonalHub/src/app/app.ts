import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title = 'Asojourn';

  // compute once in the class (allowed)
  currentYear: number = new Date().getFullYear();

  projects = [
    { name: 'PersonalHub', description: 'Personal homepage and project showcase', url: 'https://github.com/asojourn/Personal-PersonalHub' }
    // Add more projects here
  ];
}
