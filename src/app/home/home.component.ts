import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatToolbar, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trendingMovies = [
    { title: 'Filme 1', image: 'assets/images/movie1.jpg' },
    { title: 'Filme 2', image: 'assets/images/movie2.jpg' },
    { title: 'Filme 3', image: 'assets/images/movie3.jpg' }
  ];
}
