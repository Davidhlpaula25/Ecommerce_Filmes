import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cartao',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent {
  nome = '';
  numero = '';
  validade = '';
  cvv = '';

  constructor(private router: Router) {}

  cadastrarCartao() {
    if (this.nome && this.numero && this.validade && this.cvv) {
      alert('Cartão cadastrado com sucesso!');
      // Redireciona para a tela de confirmação
      this.router.navigate(['/confirmacao']);
    } else {
      alert('Preencha todos os campos.');
    }
  }
}
