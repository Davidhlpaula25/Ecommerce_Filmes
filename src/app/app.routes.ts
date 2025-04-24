import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.component').then(m => m.CadastroComponent)
  },
  {
    path: 'carrinho',
    loadComponent: () => import('./carrinho/carrinho.component').then(m => m.CarrinhoComponent)
  },
  {
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos.component').then(m => m.ProdutosComponent)
  }
];
