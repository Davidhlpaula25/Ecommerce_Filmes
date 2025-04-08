import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatCardModule,MatIconModule, MatToolbarModule, RouterModule],
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent {
  http = inject(HttpClient);
  filmes = signal<any[]>([]);

  constructor() {
    this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=46e081c1fadc5152d5f276b471abd1b5&language=pt-BR')
      .subscribe(res => this.filmes.set(res.results));
  }

  adicionarAoCarrinho(filme: any) {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho') || '[]');
    carrinhoAtual.push(filme);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
    alert('Filme adicionado ao carrinho!');
  }
}
