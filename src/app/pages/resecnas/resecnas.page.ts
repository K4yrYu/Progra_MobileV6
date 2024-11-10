import { Component, OnInit } from '@angular/core';
import { ManejodbService } from 'src/app/services/manejodb.service';

@Component({
  selector: 'app-resecnas',
  templateUrl: './resecnas.page.html',
  styleUrls: ['./resecnas.page.scss'],
})
export class ResecnasPage implements OnInit {
  resecnas: any[] = [];
  resecnasBaneadas: any[] = [];

  constructor(private manejodbService: ManejodbService) {}

  async ngOnInit() {
    await this.cargarResecnas();
    await this.cargarResecnasBaneadas();
  }

  async cargarResecnas() {
    const idUsuario = await this.manejodbService.obtenerIdUsuarioLogueado();
    if (idUsuario) {
      this.resecnas = await this.manejodbService.obtenerResecnasUsuario(
        idUsuario
      );
    }
  }

  async cargarResecnasBaneadas() {
    const idUsuario = await this.manejodbService.obtenerIdUsuarioLogueado();
    if (idUsuario) {
      this.resecnasBaneadas = await this.manejodbService.obtenerResecnasBaneadasConDetalles(idUsuario);
      console.log("Reseñas baneadas cargadas:", this.resecnasBaneadas);
    }
  }
  
}
