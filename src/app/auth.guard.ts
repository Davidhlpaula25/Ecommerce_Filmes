


import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    return !!localStorage.getItem('usuarioLogado');
  }
}

export const canActivateGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService();
  const router = new Router(); // Isso precisa ser injetado

  if (authService.isLoggedIn()) {
    return true;
  } else {
    alert('Você precisa estar logado para acessar essa página!');
    return router.parseUrl('/login');
  }
};
