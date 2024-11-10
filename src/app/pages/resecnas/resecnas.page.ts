import { Component, OnInit } from '@angular/core';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { Resecnas } from 'src/app/services/resecnas';
import { Resecnasyuser } from 'src/app/services/resecnasyuser';

@Component({
  selector: 'app-resecnas',
  templateUrl: './resecnas.page.html',
  styleUrls: ['./resecnas.page.scss'],
})
export class ResecnasPage implements OnInit {
  resecnas: any[] = [
    {
      id_resecna: '',
      text_resecna: '',
      id_producto: '',
      username: '',
      foto_usuario: '',
      userlogged: ''
    }
  ];

  resecnas2: any[] = [];

  resecnasSUSPENDIDA: any[] = [
    {
      id_suspencion:'',
      motivo_suspencion:'',
      suspendido:'',
      id_usuario:'',
      id_resecna:''
    }
  ]

  resecnaSUS: boolean = false;

  constructor(private manejodbService: ManejodbService) {
    /*this.manejodbService.dbState().subscribe(data => {
      if (data) {
        this.manejodbService.fetchSuspencionResecna().subscribe(res => {
          this.resecnasSUSPENDIDA = res;
        });
      }
    }); */
  }

  async ngOnInit() {
    await this.cargarResecnas();
  }

  async cargarResecnas() {
    try {
      const idUsuario = await this.manejodbService.obtenerIdUsuarioLogueado();
      if (idUsuario) {
        this.resecnas = await this.manejodbService.obtenerResecnasUsuario(idUsuario);
      } else {
        console.warn('No hay usuario logueado.');
      }
    } catch (error) {
      console.error('Error al cargar reseñas:', error);
    }
  }

  async cargarSuspencionResecnas(idrcsna: number): Promise<boolean | undefined> {
    try {
      const idUsuario = await this.manejodbService.obtenerIdUsuarioLogueado();
      if (idUsuario) {
        this.resecnas2 = await this.manejodbService.obtenerResecnasUsuario2(idUsuario, idrcsna);
        if (this.resecnas2.length > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        console.warn('No hay usuario logueado.');
        return undefined;  // Return undefined if no user is logged in
      }
    } catch (error) {
      console.error('Error al cargar reseñas:', error);
      return undefined;  // Return undefined in case of an error
    }
  }


  async actualizarResecnas(event: any) {
    await this.cargarResecnas();
    event.target.complete(); // Finaliza la animación del refresher.
  }

  async eliminarResena(idR: any) {
    await this.manejodbService.eliminarResecnasUsuario(idR);
    await this.cargarResecnas(); // Actualiza la lista después de eliminar
  }
}
