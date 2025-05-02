import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule

  ],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {
    const jaExiste = this.localStorageService.getItem('usuario');
    if (!jaExiste) {
      const usuarioTeste = {
        email: 'teste@teste.com',
        senha: '1234'
      };
      this.localStorageService.setItem('usuario', JSON.stringify(usuarioTeste));
    }
  }

  login() {
    if (this.form.invalid) return;

    const { email, senha } = this.form.value;
    const usuarioString = this.localStorageService.getItem('usuario');
    const usuarioSalvo = usuarioString ? JSON.parse(usuarioString) : null;

    if (usuarioSalvo && email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
      this.localStorageService.setItem('usuarioLogado', JSON.stringify(usuarioSalvo));
      this.router.navigate(['/produtos']);
    } else {
      alert('Credenciais inválidas');
    }
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}
