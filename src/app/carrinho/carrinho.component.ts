import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  filmes = JSON.parse(localStorage.getItem('carrinho') || '[]');
  mostrarTudo: { [id: number]: boolean } = {};
  precoUnitario = 14.9;
  router: any;

  removerDoCarrinho(index: number) {
    this.filmes.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(this.filmes));
  }

  esvaziarCarrinho() {
    this.filmes = [];
    localStorage.removeItem('carrinho');
  }

  finalizarCompra() {
    this.router.navigate(['/cartao']);
  }



  toggleDescricao(id: number) {
    this.mostrarTudo[id] = !this.mostrarTudo[id];
  }

  isExpandido(id: number): boolean {
    return this.mostrarTudo[id];
  }

  get totalItens(): number {
    return this.filmes.length;
  }

  get totalPreco(): number {
    return this.totalItens * this.precoUnitario;
  }
}
