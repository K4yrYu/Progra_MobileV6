import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { Resecnascrud } from 'src/app/services/resecnascrud';

@Component({
  selector: 'app-adminresecnas',
  templateUrl: './adminresecnas.page.html',
  styleUrls: ['./adminresecnas.page.scss'],
})
export class AdminresecnasPage implements OnInit {

  arregloResecnasPalCrud: Resecnascrud[] = []; // Inicia como un arreglo vacío
  resecnaBaneA: any;


  arregloUsuarios: any = [
    {
      id_usuario: '',
      rut_usuario: '',
      nombres_usuario: '',
      apellidos_usuario: '',
      username: '',
      clave: '',
      correo: '',
      token_recup_clave: '',
      foto_usuario: '',
      estado_user: '',
      userlogged: '',
      id_rol: ''
    }
  ]

  constructor(private bd: ManejodbService, private router: Router) { }

  async ngOnInit() {
    // Verificar si la BD está disponible
    this.bd.dbState().subscribe(data => {
      if (data) {
        // Llama a obtenerResecnas desde el servicio
        this.traeLaWa2(); // Cargar las reseñas al iniciar
      }
    });
  }

  

  async traeLaWa2() {
    this.arregloResecnasPalCrud = await this.bd.obtenerResecnas();
  }

  // Método para eliminar reseña
  async eliminarResecna(rsc: Resecnascrud) {
      let navigationExtras: NavigationExtras = {
        state: {
          resecnaBaneA: rsc
        }
      }
      this.router.navigate(['/editarresecna'], navigationExtras);
    
  } 







  /*
  async eliminarResecna(rsc: Resecnascrud) {
    this.arregloUsuarios = await this.bd.consultarUsuariosPorUsername(rsc.username);

    await this.bd.agregarMotivoSuspencionResecna(this.arregloUsuarios.id_usuario,rsc.id_resecna,this.motivo).then(() => {
      // Actualizar la lista de reseñas después de eliminar
      this.traeLaWa2(); // Refrescar la lista de reseñas
      this.arregloUsuarios = []
      this.motivo = "";
    });
  } */
}
