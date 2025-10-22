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
    { name: 'Hub', description: 'Personal homepage and project showcase', url: 'https://github.com/asojourn/Hub' },
    { name: 'Home Amoritization Chart', description: 'Dynamic Excel spreadsheet that helps you plan and track your mortgage. Download', url: 'https://github.com/asojourn/Hub/PersonalHub/PersonalHub/public/spreadsheets/HomeAmoritizationChart.xlsx' }
    // Add more projects here
  ];
}
