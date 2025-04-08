import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component'; // importe seu componente de produtos
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ProdutosComponent },
     { path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.component').then(m => m.CadastroComponent)},
    {path: 'header',
    loadComponent: () => import('./header/header.component').then(m => m.HeaderComponent)},

    {path: 'carrinho',
    loadComponent: () => import('./carrinho/carrinho.component').then(m => m.CarrinhoComponent)
  }
  ];
