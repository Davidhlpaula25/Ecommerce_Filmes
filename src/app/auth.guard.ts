// auth.guard.ts
import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  const isLogado = localStorage.getItem('usuarioLogado') === 'true';
  return isLogado;
};
