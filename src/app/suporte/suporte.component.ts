import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-suporte',
  imports: [MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent {
  mostrarSuporte = false;

  toggleSuporte() {
    this.mostrarSuporte = !this.mostrarSuporte;
  }
}
