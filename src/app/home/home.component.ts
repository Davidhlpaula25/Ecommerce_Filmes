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
    { title: 'Tempo de Guerra', image: 'assets/filme1.png' },
    { title: 'Resgate Implacável', image: 'assets/filme2.png' },
    { title: 'Ladrão de Joias', image: 'assets/filme3.png' },
    { title: 'Llo $ Stitch', image: 'assets/filme4.jpg' }
  ];
}
