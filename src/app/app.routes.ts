import { Routes } from '@angular/router';
import { canActivateGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
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
    loadComponent: () => import('./carrinho/carrinho.component').then(m => m.CarrinhoComponent),
    canActivate: [canActivateGuard]
  },
  {
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos.component').then(m => m.ProdutosComponent),
    canActivate: [canActivateGuard]
  },
  {
    path: 'cartao',
    loadComponent: () => import('./cartao/cartao.component').then(m => m.CartaoComponent),
    canActivate: [canActivateGuard]
  },
  {
    path: 'confirmacao',
    loadComponent: () => import('./confirmacao/confirmacao.component').then(m => m.ConfirmacaoComponent),
    canActivate: [canActivateGuard]
  }
];
