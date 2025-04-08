import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service'; // ajuste o caminho conforme seu projeto

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
      confirmarSenha: ['', [Validators.required]]
    });
  }

  cadastrar() {
    if (this.form.invalid) return;

    const { email, senha, confirmarSenha } = this.form.value;

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const novoUsuario = { email, senha };
    this.localStorageService.setItem('usuario', JSON.stringify(novoUsuario));
    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/login']);
  }
}
