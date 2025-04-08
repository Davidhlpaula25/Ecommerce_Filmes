import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho: any[] = [];

  adicionarAoCarrinho(filme: any): void {
    this.carrinho.push(filme);
  }

  removerDoCarrinho(filmeId: number): void {
    this.carrinho = this.carrinho.filter(filme => filme.id !== filmeId);
  }

  obterCarrinho(): any[] {
    return this.carrinho;
  }
}
