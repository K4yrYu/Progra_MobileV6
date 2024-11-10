import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { Resecnascrud } from 'src/app/services/resecnascrud';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adminresecnas',
  templateUrl: './adminresecnas.page.html',
  styleUrls: ['./adminresecnas.page.scss'],
})
export class AdminresecnasPage implements OnInit {

  arregloResecnasPalCrud: Resecnascrud[] = [];
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

  constructor(private bd: ManejodbService, private router: Router, private alertController: AlertController) { }

  async ngOnInit() {
    // Verificar si la BD está disponible
    this.bd.dbState().subscribe(data => {
      if (data) {
        this.traeLaWa2(); // Cargar las reseñas al iniciar
      }
    });
  }

  async traeLaWa2() {
    this.arregloResecnasPalCrud = await this.bd.obtenerResecnas();
  }

  async eliminarResecnaConMotivo(resecna: Resecnascrud) {
    const alert = await this.alertController.create({
      header: `Eliminar reseña de "${resecna.nombre_prod}"`,
      message: `Ingresa el motivo para eliminar la reseña de "${resecna.nombre_prod}"`,
      inputs: [
        {
          name: 'motivo',
          type: 'text',
          placeholder: 'Escribe el motivo de la eliminación'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: async (data) => {
            const motivo = data.motivo;
            if (motivo) {
              // Llama a la función de eliminar reseña con motivo en el servicio
              await this.bd.eliminarResecna(resecna.id_resecna, resecna.id_usuario, motivo, resecna.nombre_prod);
              // Filtra la reseña eliminada de la lista
              this.arregloResecnasPalCrud = this.arregloResecnasPalCrud.filter(r => r.id_resecna !== resecna.id_resecna);
            }
          }
        }
      ]
    });
    await alert.present();
  }
  
}




