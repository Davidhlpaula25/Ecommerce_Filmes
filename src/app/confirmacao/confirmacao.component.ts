import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent {
  dataAtual = new Date();
  filmesComprados = JSON.parse(localStorage.getItem('carrinho') || '[]');

  constructor(private router: Router) {}

  voltarParaProdutos() {
    localStorage.removeItem('carrinho');
    this.router.navigate(['/produtos']);
  }
}
